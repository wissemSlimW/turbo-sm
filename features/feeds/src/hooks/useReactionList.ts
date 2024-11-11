import { FeedsPanelProps, UserReaction } from "@panel/feeds";
import { useApi } from "@repo/api";
import { Media, User } from "@repo/types";
import { getItem } from "@repo/utils";
import { useMemo } from "react";

/**
 *
 * @param  reactions list of reactions that will be restructured to new format .
 * @param limit reserved for the number of comment to request
 * @param reactionType reaction type that will filter the reactions list.
 * @returns the list of elemnts, the status ready variable, with the users list related to the eractions owners
 */
export const useReactionList: FeedsPanelProps["hooks"]["useReactionList"] = (
  props
) => {
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
  const ready = readyUsers && readyMedia;
  const getData = (list: string[]): UserReaction[] =>
    list.map((_id) => {
      const user = getItem({ list: users, field: "_id", value: _id });
      const img = getItem({ list: media, field: "meta.userId", value: _id });
      return {
        _id,
        firstName: user?.firstName!,
        lastName: user?.lastName!,
        imgUrl: img?.path!,
        reaction: props.reactions[_id]!,
      };
    });
  if (props.reactionType === "all") {
    return {
      ready,
      list: getData(Object.keys(props.reactions).slice(0, props.limit)),
    };
  }
  return {
    ready,
    list: getData(
      Object.keys(props.reactions)
        .filter((_id) => props.reactions[_id] === props.reactionType)
        .slice(0, props.limit)
    ),
  };
};
