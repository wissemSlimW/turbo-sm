import { Comment, Media, Post, User } from "./entities";

const db = {
  users: null! as User[],
  comments: null! as Comment[],
  posts: null! as Post[],
  media: null! as Media[],
};
export type DB = typeof db;
export type Collections = (typeof db)[keyof typeof db][0];
