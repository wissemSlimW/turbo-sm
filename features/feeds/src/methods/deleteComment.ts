import { FeedsPanelProps } from "@panel/feeds";
import { deleteItem } from "@repo/api";

export const deleteComment: FeedsPanelProps["methods"]["deleteComment"] = (
  props
) => {
  deleteItem({ collection: "comments", id: props._id })
    .then(() => props.cb())
    .catch((err) => console.log(err));
};
