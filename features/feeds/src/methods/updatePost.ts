import { FeedsPanelProps } from "@panel/feeds";
import { removeMediaFiles, updateItem, uploadMediaFiles } from "@repo/api";
import { Post } from "@repo/types";

export const updatePost: FeedsPanelProps["methods"]["updatePost"] = async (
  props
) => {
  await updateItem<Post>({
    collection: "posts",
    id: props.postId,
    data: { description: props.text },
  });
  if (props.newFiles.length)
    await uploadMediaFiles({
      files: props.newFiles,
      metaId: props.postId,
      path: "posts",
    });
  if (props.removedFiles.length)
    await removeMediaFiles({ fileIds: props.removedFiles, path: "posts" });
  props.cb();
};
