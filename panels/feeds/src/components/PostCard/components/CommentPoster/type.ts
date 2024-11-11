import { UserAvatarProps } from "@repo/user-avatar";

export type CommentPosterProps = {
  relatedTo: string;
  commentWriter: UserAvatarProps["user"];
  addComment: (text: string, cb: () => void) => void;
};
