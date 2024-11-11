import { Media, Post, User } from "@repo/types";
import { useApi } from "@repo/api";
import { FeedsPanelProps } from "@panel/feeds";
import { useMemo } from "react";

/**
 *
 * @param limit reserved for the number of posts to be request
 * @returns the list of elemnts, the status ready variable, with the users, thier picyures and media lists related to the comments owners
 */
export const usePostList: FeedsPanelProps["hooks"]["usePostList"] = (props) => {
  const { list, ready: readyPosts } = useApi<Post>(
    useMemo(
      () => ({
        collection: "posts",
        limit: props.limit,
        sort: { createdAt: -1 },
      }),
      [props.limit]
    )
  );
  const { list: media, ready: readyMedia } = useApi<Media>(
    useMemo(
      () => ({
        collection: "media",
      }),
      []
    )
  );
  const { list: users, ready: readyUsers } = useApi<User>(
    useMemo(
      () => ({
        collection: "users",
      }),
      []
    )
  );
  return {
    list,
    attachments: {
      users,
      media,
    },
    ready: readyMedia && readyPosts && readyUsers,
  };
};
