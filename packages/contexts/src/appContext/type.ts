import { Comment, Media, Post, User } from "@repo/types";

type Data = {
  users: User[];
  comments: Comment[];
  posts: Post[];
  media: Media[];
};

export type AppCtx = {
  data: Partial<Data>;
  setData?: React.Dispatch<React.SetStateAction<Partial<Data>>>;
};
