import { ReactElement } from "react";
import { UserAvatarProps } from "@repo/user-avatar";
import { PostCardProps } from "../../type";
import { Comment, ReactionData } from "@repo/types";

export type CommentCardProps = Pick<
  PostCardProps,
  "user" | "formatDateDisplay" | "maxCommentDepth"
> &
  Pick<PostCardProps["hooks"], "useCommentList" | "useCommentCount"> &
  Pick<
    PostCardProps["actions"],
    "handleClickReaction" | "addcomment" | "deleteComment" | "updateComment"
  > & {
    commentOwner: UserAvatarProps["user"] | undefined;
    renderComment?: (props: CommentCardProps) => ReactElement;
    comment: Comment;
    onStatsClick: (data: ReactionData) => void;
  };
