import { FeedsPanelProps } from "@panel/feeds";

export const updatePost: FeedsPanelProps["methods"]["updatePost"] = (props) => {
  console.log({ props });
  // const dataSent: PostUpdateReq = {
  //   _id: props.postId,
  //   description: props.text.trim(),
  // }
  // updateItem({
  //   dataSent,
  //   method: 'posts.update',
  //   cb: (res: { _id: string }) => {
  //     props.newFiles?.forEach(image =>
  //       handleSetFile({
  //         imageFile: image,
  //         imageId: undefined,
  //         imageType: 'postId',
  //         itemId: props.postId,
  //         type: 'StoryMedia',
  //       }),
  //     )
  //     props.removedFiles.forEach(p => removeFile({ _id: p, type: 'StoryMedia' }))
  //     props.cb()
  //   },
  // })
};
