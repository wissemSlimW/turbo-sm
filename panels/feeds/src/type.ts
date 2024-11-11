import { Media, Post, User } from "@repo/types";
import { AvatarUser, PostCardProps, PosterProps } from "./components";

export type FeedsPanelProps = {
  hooks: {
    useCommentCount: PostCardProps["hooks"]["useCommentCount"];
    useCommentList: PostCardProps["hooks"]["useCommentList"];
    useReactionList: PostCardProps["hooks"]["useReactionList"];
    usePostList: (props: { limit?: number }) => {
      list: Post[];
      ready: boolean;
      attachments: {
        users: User[];
        media: Media[];
      };
    };
    useUser: () => { user: AvatarUser; ready: boolean };
  };
  methods: Omit<PostCardProps["actions"], "handleUpdatePostClick"> &
    PosterProps["actions"];
};
export type mediaFileType = {
  id: string;
  name: string;
  path: string;
  type: "image" | "video" | "doc";
};
