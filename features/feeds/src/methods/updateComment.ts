import { FeedsPanelProps } from "@panel/feeds";
import { updateItem } from "@repo/api";

export const updateComment: FeedsPanelProps["methods"]["updateComment"] = (
  props
) => {
  updateItem({
    collection: "comments",
    data: { text: props.dataSent.text },
    id: props.dataSent._id,
  })
    .then(() => props.cb())
    .catch((err) => console.log(err));
};
