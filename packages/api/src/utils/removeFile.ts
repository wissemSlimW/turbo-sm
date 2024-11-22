import { storage } from "../firebase";
import { ref, deleteObject } from "firebase/storage";
import { findMany, deleteMany } from "../calls";
import { Media } from "@repo/types";

export const removeFile = (props: {
  path: string;
  fileName: string;
}): Promise<void> => {
  const fileRef = ref(storage, `${props.path}/${props.fileName}`);

  return new Promise<void>((resolve, reject) => {
    deleteObject(fileRef)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            reject("File not found at the specified path");
            break;
          case "storage/unauthorized":
            reject("User doesn't have permission to delete the file");
            break;
          case "storage/canceled":
            reject("File deletion was canceled");
            break;
          case "storage/unknown":
            reject("Unknown error occurred");
            break;
          default:
            reject("Error deleting file");
        }
      });
  });
};

export const removeMediaFiles = async (props: {
  path: string;
  fileIds: string[];
}) => {
  const media = await findMany<Media>({
    collection: "media",
    documentIds: props.fileIds,
  });

  const urls = await Promise.all(
    media.map((file) =>
      removeFile({ path: "posts", fileName: file.name }).then((res) => res)
    )
  );
  return await deleteMany({
    collection: "media",
    docIds: media.map((file) => file._id),
  });
};
