import { FormEvent, Fragment, useMemo, useState } from "react";
import { getItem } from "@repo/utils";
import { CommentPoster } from "../CommentPoster";
import { CommentStats } from "../CommentStats";
import { LoadMore } from "../LoadMore";
import { DICTIONARY } from "./dict";
import { useStyles } from "./style";
import { CommentCardProps } from "./type";
import { UserAvatar } from "@repo/user-avatar";
import { Send1 } from "@repo/icons/bold";
import { useAppTheme } from "@repo/styles";

export const CommentCard = (props: CommentCardProps) => {
  const theme = useAppTheme();
  const [updateMode, setUpdateMode] = useState(false);
  const [text, setText] = useState("");
  const classes = useStyles({ theme });

  const [limit, setLimit] = useState(0);
  const {
    db: { users: commentsUsers },
    list: comments,
  } = props.useCommentList(
    useMemo(
      () => ({
        relatedTo: props.comment._id!,
        relationType: "comment",
        limit,
      }),
      [limit, props.comment._id]
    )
  );
  const { count: commentsCount } = props.useCommentCount(
    useMemo(
      () => ({
        relatedTo: props.comment._id!,
        relationType: "comment",
      }),
      [props.comment._id]
    )
  );
  const [showReplyInput, setShowReplyInput] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      props.updateComment({
        dataSent: { text, _id: props.comment._id! },
        cb: () => {
          setText("");
          setUpdateMode(false);
        },
      });
    }
  };
  return (
    <div className={classes.container}>
      <span>
        <UserAvatar user={props.commentOwner} />
      </span>
      <span className={classes.content}>
        <span className={classes.commentDetails}>
          {updateMode ? (
            <form className={classes.updateBlock} onSubmit={handleSubmit}>
              <input
                className={classes.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button className={classes.sendBtn} type="submit">
                <Send1 />
              </button>
            </form>
          ) : (
            <>
              <span className={classes.commentHeader}>
                <span className={classes.text}>{`${
                  props.commentOwner?.firstName || ""
                } ${props.commentOwner?.lastName || ""}`}</span>
                <span className={classes.dateLabel}>
                  {props.comment.createdAt &&
                    props.formatDateDisplay(props.comment.createdAt)}
                </span>
              </span>
              <span className={classes.text}>{props.comment.text}</span>
            </>
          )}
        </span>
        <CommentStats
          updateMode={updateMode}
          onCancelClick={() => {
            setUpdateMode(false);
            setText("");
          }}
          onUpdateClick={() => {
            setUpdateMode(true);
            setText(props.comment.text);
          }}
          showReply={!!props.maxCommentDepth}
          onReactionClick={(reactionType) => {
            const reactions = props.comment.reactions;
            if (reactions[props.user._id] === reactionType)
              delete reactions[props.user._id];
            else reactions[props.user._id] = reactionType;
            props.handleClickReaction({
              relatedTo: props.comment._id!,
              relationType: "comment",
              reactions,
            });
          }}
          onReplyClick={() => {
            setShowReplyInput(true);
          }}
          onDeleteClick={() => {
            props.deleteComment({ _id: props.comment._id!, cb: () => {} });
          }}
          onStatsClick={props.onStatsClick}
          reactionOnComment={props.comment.reactions[props.user._id]}
          comment={props.comment}
        />
        <>
          {comments.map((comment) => (
            <Fragment key={comment._id}>
              {props.renderComment?.({
                ...props,
                maxCommentDepth: props.maxCommentDepth! - 1,
                comment,
                commentOwner: getItem({
                  list: commentsUsers,
                  value: comment.createdBy,
                  field: "_id",
                }),
              })}
            </Fragment>
          ))}
          {showReplyInput && (
            <CommentPoster
              addComment={(text, cb) =>
                props.addcomment({
                  cb: () => {
                    cb();
                    setLimit((prev) => prev + 5);
                  },
                  dataSent: {
                    text,
                    relatedTo: props.comment._id!,
                    relationType: "comment",
                  },
                })
              }
              relatedTo={props.comment._id!}
              commentWriter={props?.user}
            />
          )}
        </>
        <LoadMore
          loadedCount={Math.min(limit, commentsCount)}
          text={
            limit === 0 ? DICTIONARY.viewReplies : DICTIONARY.viewMoreReplies
          }
          totalCount={commentsCount}
          onClick={() => {
            setLimit((prev) => prev + 5);
            setShowReplyInput(true);
          }}
        />
      </span>
    </div>
  );
};
