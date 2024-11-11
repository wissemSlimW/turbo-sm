import { Feeds as FeedPanel } from "@panel/feeds";
import { useApi, useUser } from "@repo/api";
import { Post, User } from "@repo/types";
import { useMemo } from "react";
import {
  useCommentCount,
  useCommentList,
  usePostList,
  useReactionList,
} from "./hooks";
import {
  addPost,
  addcomment,
  deleteComment,
  deletePost,
  handleClickReaction,
  updateComment,
  updatePost,
} from "./methods";

const Feeds = () => {
  // const { list: posts } = useApi<Post>(
  //   useMemo(
  //     () => ({
  //       collection: "posts",
  //     }),
  //     []
  //   )
  // );
  // const { list: users, ready } = useApi<User>(
  //   useMemo(
  //     () => ({
  //       collection: "users",
  //     }),
  //     []
  //   )
  // );
  // console.log({ users });

  // useEffect(() => {
  //   posts.length &&
  //     users.length &&
  //     posts.forEach((m) => {
  //       const user = users.find((u) => u?.oldId === m.createdBy);
  //       updateItem({
  //         collection: "media",
  //         id: m._id,
  //         data: { createdBy: user?._id! },
  //       });
  //     });
  // }, [posts, users]);

  // const { list: comments } = useApi<User>(
  //   useMemo(
  //     () => ({
  //       collection: "comments",
  //       sort: { createdAt: 1 },
  //     }),
  //     []
  //   )
  // );

  // useEffect(() => {
  //   users.length &&
  //     posts.length &&
  //     posts.forEach((item: Post, i) => {
  //       Array(randomize(25))
  //         .fill("")
  //         .forEach(() => {
  //           let reactionsUsers: User[] = [];
  //           addItem<Comment>({
  //             collection: "comments",
  //             data: {
  //               relatedTo: item._id,
  //               relationType: "post",
  //               deleted: false,
  //               text: COMMENTS[randomize(15)],
  //               createdAt: new Date(
  //                 2024,
  //                 9,
  //                 randomize(30),
  //                 randomize(23),
  //                 randomize(60),
  //                 randomize(60)
  //               ),
  //               createdBy: users[randomize(users.length)]?._id,
  //               reactions: Array(randomize(30) + 5)
  //                 .fill("")
  //                 .map((_, i) => {
  //                   const filtered = users.filter((u) =>
  //                     reactionsUsers.every((ru) => ru._id !== u._id)
  //                   );
  //                   const user = filtered[randomize(filtered.length)];
  //                   reactionsUsers = [...reactionsUsers, user!];
  //                   return user?._id;
  //                 })
  //                 .reduce(
  //                   (prev, cur) => ({
  //                     ...prev,
  //                     [cur]: REACTIOJNSTYPES[randomize(REACTIOJNSTYPES.length)],
  //                   }),
  //                   {}
  //                 ),
  //             } as Comment,
  //           });
  //         });
  //     });
  // }, [users, posts]);

  // useEffect(() => {
  //   users.length &&
  //     list.then((res) => {
  //       console.log(res);
  //       res
  //         .sort(
  //           (a, b) =>
  //             a.name.split(".")[0].split("photo")[1] -
  //             b.name.split(".")[0].split("photo")[1]
  //         )
  //         .map((item, i) => {
  //           const user = users.find(
  //             (u) =>
  //               `${u.firstName} ${u.lastName}` ===
  //               [...FEMALE_NAMES, ...MALE_NAMES][i]
  //           );
  //           addItem({
  //             collection: "media",
  //             data: {
  //               ...item,
  //               createdBy: user?._id,
  //               isAudio: false,
  //               isImage: true,
  //               isJSON: false,
  //               isPDF: false,
  //               isText: false,
  //               isVideo: false,
  //               meta: { userId: user?._id },
  //             },
  //           } satisfies { collection: string; data: Media });
  //         });
  //     });
  // }, [users]);

  // useEffect(() => {
  //   users.length &&
  //     POSTS.forEach((post) => {
  //       let reactionsUsers: User[] = [];
  //       addItem<Post>({
  //         collection: "posts",
  //         data: {
  //           deleted: false,
  //           description: post.description,
  //           visibility: "visible",
  //           createdAt: new Date(
  //             2024,
  //             8,
  //             randomize(30),
  //             randomize(23),
  //             randomize(60),
  //             randomize(60)
  //           ),
  //           createdBy: users[randomize(users.length)]?._id,
  //           reactions: Array(randomize(30) + 5)
  //             .fill("")
  //             .map((_, i) => {
  //               const filtered = users.filter((u) =>
  //                 reactionsUsers.every((ru) => ru._id !== u._id)
  //               );
  //               const user = filtered[randomize(filtered.length)];
  //               reactionsUsers = [...reactionsUsers, user!];
  //               return user?._id;
  //             })
  //             .reduce(
  //               (prev, cur) => ({
  //                 ...prev,
  //                 [cur]: REACTIOJNSTYPES[randomize(REACTIOJNSTYPES.length)],
  //               }),
  //               {}
  //             ),
  //         },
  //       });
  //     });
  // }, [users]);

  return (
    <FeedPanel
      hooks={{
        useCommentCount,
        useCommentList,
        usePostList,
        useReactionList,
        useUser,
      }}
      methods={{
        addcomment,
        addPost,
        deleteComment,
        deletePost,
        handleClickReaction,
        updateComment,
        updatePost,
      }}
    />
  );
};
export default Feeds;
