import { Reaction, ReactionData } from "@repo/types";
import { PostCardProps } from "../../type";
export type UserReaction = {
  _id: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
  reaction: Reaction;
};
export type ReactionDialogProps = {
  handleClose: () => void;
  reactions: ReactionData;
} & Pick<PostCardProps, "itemsLoadingParams" | "formatDateDisplay"> &
  Pick<PostCardProps["hooks"], "useReactionList">;
