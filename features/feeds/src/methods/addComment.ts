import { FeedsPanelProps } from "@panel/feeds";
import { addItem } from "@repo/api";
import { FAKE_USER } from "@repo/api/src/hooks/data.const";
import { Comment } from "@repo/types";
export const addcomment: FeedsPanelProps["methods"]["addcomment"] = (props) => {
  addItem<Comment>({
    collection: "comments",
    data: {
      ...props.dataSent,
      reactions: {},
      deleted: false,
      createdBy: FAKE_USER._id, // Fake data
    },
  })
    .then(() => props.cb())
    .catch((err) => console.log(err));
};
