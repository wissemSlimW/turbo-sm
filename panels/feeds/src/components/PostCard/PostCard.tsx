import { useMemo, useState } from "react";
import { useAppTheme } from "@repo/styles";
import { getItem } from "@repo/utils";
import {
  CarouselDialog,
  CommentCard,
  CommentPoster,
  Header,
  InteractionMenu,
  InteractionStats,
  LoadMore,
  PostBody,
  ReactionDialog,
} from "./components";
import { REACTIONS } from "./constant";
import { DICTIONARY } from "./dict";
import { useStyles } from "./style";
import { PostCardProps } from "./type";
import { getGroupedReaction } from "./utils";
import { ReactionData } from "@repo/types";

export const PostCard = (props: PostCardProps) => {
  const [limit, setLimit] = useState(
    props.itemsLoadingParams.commentsAtInitialRequest
  );
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const [showCommentPoster, setShowcommentPoster] = useState(false);
  const [showCarouselDialog, setShowCarouselDialog] = useState<null | number>(
    null
  );
  const [showReactionsDialog, setShowReactionsDialog] = useState<
    false | ReactionData
  >(false);
  const [showComments, setShowcomments] = useState(false);
  const {
    db: { users: commentsUsers },
    list: comments,
  } = props.hooks.useCommentList(
    useMemo(
      () => ({
        relatedTo: props.post._id!,
        relationType: "post",
        limit,
      }),
      [props.post._id, limit]
    )
  );
  const { count: commentsCount } = props.hooks.useCommentCount(
    useMemo(
      () => ({
        relatedTo: props.post._id!,
        relationType: "post",
      }),
      [props.post._id]
    )
  );

  const reactionTypeStats = useMemo(
    () =>
      getGroupedReaction({
        reactions: props.post.reactions,
        reactioncCuntOnDisplay: 3,
      }),
    [props.post.reactions]
  );

  const maxCommentDepth = props.maxCommentDepth || 4;
  return (
    <>
      <div className={classes.container}>
        <Header
          post={props.post}
          updatePost={props.actions.handleUpdatePostClick}
          deletePost={() =>
            props.actions.deletePost({ _id: props.post._id!, cb: () => {} })
          }
          user={props.user}
          postOwner={props.postOwner}
          title={`${props.postOwner?.firstName} ${props.postOwner?.lastName}`}
          subtitle={props.postingDate}
        />
        {
          <PostBody
            text={props.post.description}
            media={props.media.filter(
              (item) => item.meta.postId === props.post._id
            )}
            handleMediaClick={(_id) =>
              setShowCarouselDialog(props.media.findIndex((f) => f._id === _id))
            }
          />
        }
        <InteractionStats
          reactionIcons={reactionTypeStats.map((key) =>
            REACTIONS[key[0]].icon(16)
          )}
          onCommentsClick={() => {
            setShowcommentPoster(true), setShowcomments(true);
          }}
          onReactionsClick={() => {
            setShowReactionsDialog(props.post.reactions);
          }}
          onViewsClick={() => {}} //TODO callback on view button
          totalCommentsCount={commentsCount}
          totalReactionsCount={Object.keys(props.post.reactions).length}
          totalViewsCount={0} //TODO get real views value
        />
        <InteractionMenu
          userPostReaction={props.post?.reactions[props.user._id]}
          onCommentClick={() => {
            setShowcommentPoster(true);
          }}
          onMessageClick={() => {}} //TODO callback on message button
          onReactionClick={(reactionType) => {
            const reactions = props.post.reactions;
            if (reactions[props.user._id] === reactionType)
              delete reactions[props.user._id];
            else reactions[props.user._id] = reactionType;
            props.actions.handleClickReaction({
              relatedTo: props.post._id!,
              relationType: "post",
              reactions,
            });
          }}
        />
        {showCommentPoster && (
          <CommentPoster
            addComment={(text, cb) =>
              props.actions.addcomment({
                cb: () => {
                  cb();
                  setShowcomments(true);
                },
                dataSent: {
                  text,
                  relatedTo: props.post._id!,
                  relationType: "post",
                },
              })
            }
            relatedTo={props.user._id}
            commentWriter={props.user}
          />
        )}
        {showComments && (
          <>
            {comments.map((comment) => (
              <CommentCard
                updateComment={props.actions.updateComment}
                deleteComment={props.actions.deleteComment}
                maxCommentDepth={maxCommentDepth - 1}
                formatDateDisplay={props.formatDateDisplay}
                addcomment={props.actions.addcomment}
                user={props.user}
                key={comment._id}
                comment={comment}
                handleClickReaction={props.actions.handleClickReaction}
                commentOwner={getItem({
                  list: commentsUsers,
                  value: comment.createdBy,
                  field: "_id",
                })}
                onStatsClick={(data) => {
                  setShowReactionsDialog(data);
                }}
                useCommentCount={props.hooks.useCommentCount}
                useCommentList={props.hooks.useCommentList}
                renderComment={(commentprops) => (
                  <CommentCard {...commentprops} />
                )}
              />
            ))}

            <LoadMore
              loadedCount={Math.min(limit, commentsCount)}
              text={
                limit === 0
                  ? DICTIONARY.viewComments
                  : DICTIONARY.viewMoreComments
              }
              totalCount={commentsCount}
              onClick={() =>
                setLimit(
                  (prev) => prev + props.itemsLoadingParams.commentsPerRequest
                )
              }
            />
          </>
        )}
      </div>
      {showReactionsDialog && (
        <ReactionDialog
          formatDateDisplay={props.formatDateDisplay}
          itemsLoadingParams={props.itemsLoadingParams}
          reactions={showReactionsDialog}
          useReactionList={props.hooks.useReactionList}
          handleClose={() => setShowReactionsDialog(false)}
        />
      )}
      {showCarouselDialog !== null && (
        <CarouselDialog
          media={props.media.filter((item) => item.isImage || item.isVideo)}
          handleClose={() => setShowCarouselDialog(null)}
          selected={showCarouselDialog === -1 ? 0 : showCarouselDialog}
        />
      )}
    </>
  );
};
