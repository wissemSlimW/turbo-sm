import { Media, Post, User } from "@repo/types";
import {
  generateId,
  // generateMultipleSocialMediaPosts,
  getReactions,
  randomize,
} from "./utils";

export const seedPosts = async (
  users: User[]
): Promise<{
  posts: Post[];
  media: Media[];
}> => {
  const user = users[randomize(users.length)];
  // const text = await generateMultipleSocialMediaPosts();
  return {
    posts: [
      {
        _id: generateId(),
        createdAt: new Date(),
        createdBy: users[randomize(users.length)]?._id || "",
        reactions: getReactions(users),
        description: "eazrzaerfqsdfearazazeraze azrezrazerzae",
        visibility: "visible",
      },
      {
        _id: generateId(),
        createdAt: new Date(),
        createdBy: users[randomize(users.length)]?._id || "",
        reactions: getReactions(users),
        description: "eazrzaerfqsdfearazazeraze azrezrazerzae",
        visibility: "visible",
      },
      {
        _id: generateId(),
        createdAt: new Date(),
        createdBy: users[randomize(users.length)]?._id || "",
        reactions: getReactions(users),
        description: "eazrzaerfqsdfearazazeraze azrezrazerzae",
        visibility: "visible",
      },
      {
        _id: generateId(),
        createdAt: new Date(),
        createdBy: users[randomize(users.length)]?._id || "",
        reactions: getReactions(users),
        description: "eazrzaerfqsdfearazazeraze azrezrazerzae",
        visibility: "visible",
      },
      {
        _id: generateId(),
        createdAt: new Date(),
        createdBy: users[randomize(users.length)]?._id || "",
        reactions: getReactions(users),
        description: "eazrzaerfqsdfearazazeraze azrezrazerzae",
        visibility: "visible",
      },
    ],
    media: [],
  };
};
