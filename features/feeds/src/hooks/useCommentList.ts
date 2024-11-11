import { Comment, Media, User } from "@repo/types";
import { useApi } from "@repo/api";
import { FeedsPanelProps } from "@panel/feeds";
import { getItem } from "@repo/utils";
import { useMemo } from "react";

/**
 *
 * @param  relatedTo reserved for the id of the element the comments are related to.
 * @param limit reserved for the number of comment to request
 * @param relationType reserved for the type ('post' | 'comment') of the element the comments are related to.
 * @returns the list of elemnts, the status ready variable, with the users list related to the comments owners
 */
export const useCommentList: FeedsPanelProps["hooks"]["useCommentList"] = (
  props
) => {
  const { list, ready } = useApi<Comment>(
    useMemo(
      () => ({
        collection: "comments",
        limit: props.limit,
        args: { relatedTo: props.relatedTo },
        sort: { createdAt: -1 },
      }),
      [props.limit, props.relatedTo]
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
  const { list: media, ready: readyMedia } = useApi<Media>(
    useMemo(
      () => ({
        collection: "media",
      }),
      []
    )
  );
  return {
    list,
    ready: ready && readyUsers && readyMedia,
    db: {
      users: users.map((u) => ({
        _id: u._id,
        firstName: u.firstName,
        lastName: u.lastName,
        imgUrl: getItem({ list: media, field: "meta.userId", value: u._id })
          ?.path!,
      })),
    },
  };
};
