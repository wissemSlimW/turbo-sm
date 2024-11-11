import { PostCardProps } from "../../type";

export type HeaderProps = {
  title: string;
  subtitle: string;
  postOwner: PostCardProps["postOwner"];
  deletePost: () => void;
  updatePost: () => void;
} & Pick<PostCardProps, "post" | "user">;
