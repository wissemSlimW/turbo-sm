import { FeedsPanelProps } from "@panel/feeds";
import { deleteItem } from "@repo/api";

export const deletePost: FeedsPanelProps["methods"]["deletePost"] = (props) => {
  deleteItem({ collection: "posts", id: props._id })
    .then(() => props.cb())
    .catch((err) => console.log(err));
};
