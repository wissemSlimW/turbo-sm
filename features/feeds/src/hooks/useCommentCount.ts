import { FeedsPanelProps } from "@panel/feeds";
import { useCountApi } from "@repo/api";
import { Comment } from "@repo/types";
import { useMemo } from "react";

/**
 *
 * @param  relatedTo reserved for the id of the element the comments are related to.
 * @param relationType reserved for the type ('post' | 'comment') of the element the comments are related to.
 * @returns the elemnts count and the status ready variable
 */
export const useCommentCount: FeedsPanelProps["hooks"]["useCommentCount"] = (
  props
) => {
  const { count, ready } = useCountApi<Comment>(
    useMemo(
      () => ({
        collection: "comments",
        args: { relatedTo: props.relatedTo },
      }),
      [props.relatedTo]
    )
  );
  return {
    count,
    ready,
  };
};
