import { Comment, Post, User } from "@repo/types";
import { generateId, randomize } from "./utils";

export const seedComments = (props: { posts: Post[]; users: User[] }) => ({
  comments: props.posts
    .map((post) =>
      Array(randomize(50))
        .fill("")
        .map(
          (): Comment => ({
            _id: generateId(),
            createdAt: new Date(),
            createdBy: props.users[randomize(props.users.length)]?._id!,
            relatedTo: post._id,
            text: "....",
            relationType: "post",
            reactions: {},
          })
        )
    )
    .flat(),
});
