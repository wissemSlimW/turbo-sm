import { useMemo, useState } from "react";
import {
  PostCard,
  Poster,
  PosterPopover,
  PosterPopoverProps,
} from "./components/index";
import { Media } from "@repo/types";
import { useAppTheme } from "@repo/styles";
import { getItem, joinClassNames } from "@repo/utils";
import { DICTIONARY } from "./dict";
import { DeleteDialog } from "@repo/delete-dialog";
import { useStyles } from "./style";
import { FeedsPanelProps, mediaFileType } from "./type";
import { ScrollArea } from "@repo/scroll-area";
export const Feeds = ({
  hooks: {
    useCommentCount,
    useCommentList,
    usePostList,
    useReactionList,
    useUser,
  },
  methods: {
    addPost,
    addcomment,
    deleteComment,
    deletePost,
    handleClickReaction,
    updateComment,
    updatePost,
  },
}: FeedsPanelProps) => {
  const { user } = useUser();
  const [type, setType] = useState<PosterPopoverProps["type"]>("text");
  const [limit, setLimit] = useState(10);
  const [updatePostDialog, setUpdatePostDialog] = useState<null | {
    data: { files: mediaFileType[]; hashtags: string[]; text: string };
    _id: string;
  }>(null);
  const [deleteDialog, setDeleteDialog] = useState<
    false | { title: string; handleConfirm: () => void }
  >(false);
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const {
    attachments: { media, users },
    list: posts,
    ready,
  } = usePostList(useMemo(() => ({ limit }), [limit]));
  const globalPictures: Media[] = [];
  const PostLoader = () => (
    <span className={classes.loaderWrapper}>
      <span className={classes.loaderHeader}>
        <span
          className={joinClassNames(classes.animation, classes.loaderIcon)}
        ></span>
        <span className={classes.loaderCol}>
          <span
            className={joinClassNames(classes.animation, classes.loaderlabel)}
          ></span>
          <span
            className={joinClassNames(classes.animation, classes.loaderlabel)}
          ></span>
        </span>
      </span>
      <span className={classes.loaderBody}></span>
      <span className={classes.loaderFooter}>
        <span
          className={joinClassNames(classes.animation, classes.loaderBtn)}
        ></span>
        <span
          className={joinClassNames(classes.animation, classes.loaderBtn)}
        ></span>
        <span
          className={joinClassNames(classes.animation, classes.loaderBtn)}
        ></span>
      </span>
    </span>
  );
  const getMediaType = (f: Media) => {
    if (f.isVideo) return "video";
    if (f.isImage) return "image";
    else return "doc";
  };
  return (
    <div className={classes.container}>
      <Poster actions={{ addPost, updatePost }} user={user} />
      {!ready && (
        <span className={classes.loadingContainer}>
          <PostLoader />
          <PostLoader />
        </span>
      )}
      {ready && !posts.length && (
        <div className={classes.emptyMessageCard}>
          <div>{DICTIONARY.noElement}</div>
          <div> {DICTIONARY.comeBackLater}</div>
        </div>
      )}
      <div className={classes.scrollAreaContainer}>
        <ScrollArea
          hideLoadingComponent={ready && posts.length < limit}
          cb={(visible) => {
            visible && ready && setLimit((prev) => prev + 10);
          }}
          hideScroll={true}
          loadingComponent={<PostLoader />}
          maxhieght={"100%"}
        >
          <span className={classes.postsContainer}>
            {posts?.map((post) => (
              <PostCard
                key={post._id}
                formatDateDisplay={(date) => {
                  return date.toDateString();
                }} // TODO provide a more suitable date formater
                user={user}
                media={media.filter((p) => p.meta.postId === post._id)}
                actions={{
                  updateComment,
                  deleteComment: (props) =>
                    setDeleteDialog({
                      title: DICTIONARY.deleteComment,
                      handleConfirm: () => deleteComment(props),
                    }),
                  deletePost: (props) =>
                    setDeleteDialog({
                      title: DICTIONARY.deletePost,
                      handleConfirm: () => deletePost(props),
                    }),
                  addcomment,
                  handleClickReaction,
                  handleUpdatePostClick: () => {
                    const _files = media.filter(
                      (p) => p.meta.postId === post._id
                    );
                    // the if fnc determins the default type of display for the poster popover on update mode
                    if (!_files?.[0]) setType("text");
                    else if (getMediaType(_files?.[0]) === "doc") {
                      setType("documents");
                    } else setType("media");

                    setUpdatePostDialog({
                      _id: post._id!,
                      data: {
                        text: post.description,
                        hashtags: [], //TODO,
                        files: _files.map((f) => ({
                          id: f._id,
                          name: f.name,
                          path: f.path,
                          type: getMediaType(f),
                        })),
                      },
                    });
                  },
                }}
                hooks={{
                  useCommentCount,
                  useCommentList,
                  useReactionList,
                }}
                postingDate={post.createdAt.toDateString()} // TODO provide a more suitable date formater
                post={post}
                postOwner={{
                  firstName:
                    getItem({
                      value: post.createdBy,
                      list: users,
                      field: "_id",
                    })?.firstName || "",
                  lastName:
                    getItem({
                      value: post.createdBy,
                      list: users,
                      field: "_id",
                    })?.lastName || "",
                  imgUrl:
                    getItem({
                      value: post.createdBy,
                      list: media,
                      field: "meta.userId",
                    })?.path || "",
                }}
                itemsLoadingParams={{
                  commentsAtInitialRequest: 2,
                  commentsPerRequest: 10,
                  reactionsAtInitialRequest: 5,
                  reactionsPerRequest: 5,
                }}
              />
            ))}
          </span>
        </ScrollArea>
      </div>
      {deleteDialog && (
        <DeleteDialog
          title={deleteDialog.title}
          handleConfirm={() => deleteDialog.handleConfirm()}
          handleClose={() => setDeleteDialog(false)}
        />
      )}
      {updatePostDialog && (
        <PosterPopover
          // by passing setType fnc this way we can toggle the text and the uploadZone
          setType={(type) => setType((prev) => (prev === type ? "text" : type))}
          type={type}
          handleClose={() => setUpdatePostDialog(null)}
          data={updatePostDialog.data}
          user={{
            ...user,
            imgUrl:
              getItem({
                list: globalPictures,
                value: user._id,
                field: "meta.userId",
              })?.path || "",
          }}
          publishAction={(props) =>
            updatePost({
              ...props,
              postId: updatePostDialog._id,
            })
          }
        />
      )}
    </div>
  );
};
