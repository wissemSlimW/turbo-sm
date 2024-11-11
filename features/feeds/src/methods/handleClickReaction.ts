import { FeedsPanelProps } from "@panel/feeds";
import { updateItem } from "@repo/api";

export const handleClickReaction: FeedsPanelProps["methods"]["handleClickReaction"] =
  (props) => {
    const collection = { post: "posts", comment: "comments" } as const;
    updateItem({
      collection: collection[props.relationType],
      data: { reactions: props.reactions },
      id: props.relatedTo,
    });
  };
