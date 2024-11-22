import { FeedsPanelProps } from "@panel/feeds";
import { addItem, uploadMediaFiles } from "@repo/api";
import { FAKE_USER } from "@repo/api/src/hooks/data.const";
import { Post } from "@repo/types";

export const addPost: FeedsPanelProps["methods"]["addPost"] = async (props) => {
  if (props.text.trim() || props.files.length) {
    const postRef = await addItem<Post>({
      collection: "posts",
      data: {
        deleted: false,
        reactions: {},
        description: props.text || "",
        visibility: "visible",
        createdBy: FAKE_USER._id, // TODO
      },
    });
    if (props.files.length) {
      await uploadMediaFiles({
        files: props.files,
        metaId: postRef.id,
        path: "posts",
      });
    }
  }
  props.cb();
};
