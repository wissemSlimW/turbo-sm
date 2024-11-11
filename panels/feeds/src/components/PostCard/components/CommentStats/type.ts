import { Reaction } from "@repo/types";
import { CommentCardProps } from "../CommentCard";

export type CommentStatsProps = Pick<
  CommentCardProps,
  "comment" | "onStatsClick"
> & {
  showReply: boolean;
  onReplyClick: () => void;
  reactionOnComment: Reaction | undefined;
  onReactionClick: (reaction: Reaction) => void;
  updateMode: boolean;
  onDeleteClick: () => void;
  onUpdateClick: () => void;
  onCancelClick: () => void;
};
