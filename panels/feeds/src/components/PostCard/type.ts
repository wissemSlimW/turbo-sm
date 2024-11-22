import { Comment, Media, Post, Reaction, ReactionData } from "@repo/types";
import { UserAvatarProps } from "@repo/user-avatar";
import { UserReaction } from "./components";

export type RelationType = "comment" | "post";

type RelationParams = {
  relatedTo: string;
  relationType: RelationType;
};
type HookParams = RelationParams & {
  limit?: number;
};

type DeleteRequest = (props: { _id: string; cb: () => void }) => void;
type CommentMethods<T> = (props: { dataSent: T; cb: () => void }) => void;

export interface ReactionDb {
  users: AvatarUser[];
}
export interface CommentDb {
  users: AvatarUser[];
}

export type DataHook<T, Db> = (props: HookParams) => {
  list: T[];
  db: Db;
  ready: boolean;
};
export type UserReactionHook = (props: RelationParams) => Reaction | undefined;
export type AvatarUser = {
  firstName: string;
  lastName: string;
  _id: string;
  imgUrl: string;
};

export type CountHook = (props: HookParams) => {
  count: number;
  ready: boolean;
};
export type PostCardProps = {
  user: AvatarUser;
  media: Media[];
  postOwner: UserAvatarProps["user"];
  postingDate: string;
  post: Post;
  hooks: {
    useCommentList: DataHook<Comment, CommentDb>;
    useCommentCount: CountHook;
    useReactionList: (props: {
      limit: number;
      reactions: ReactionData;
      reactionType: Reaction | "all";
    }) => {
      ready: boolean;
      list: UserReaction[];
    };
  };
  actions: {
    addcomment: CommentMethods<RelationParams & { text: string }>;
    updateComment: CommentMethods<{ text: string; _id: string }>;
    handleClickReaction: (
      props: RelationParams & {
        reactions: ReactionData;
      }
    ) => void;
    deletePost: DeleteRequest;
    deleteComment: DeleteRequest;
    handleUpdatePostClick: () => void;
  };
  itemsLoadingParams: {
    commentsPerRequest: number;
    commentsAtInitialRequest: number;
    reactionsPerRequest: number;
    reactionsAtInitialRequest: number;
  };
  maxCommentDepth?: number;
  formatDateDisplay: (date: Date) => string;
};
