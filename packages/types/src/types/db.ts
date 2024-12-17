import { Comment, Media, Post, Translation, User } from "./entities";

const db = {
  users: null! as User[],
  comments: null! as Comment[],
  posts: null! as Post[],
  media: null! as Media[],
  translations: null! as Translation[],
};
export type DB = typeof db;
export type Collections = (typeof db)[keyof typeof db][0];
