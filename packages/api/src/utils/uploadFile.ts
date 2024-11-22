import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FAKE_USER } from "../hooks/data.const";
import { mediaType } from "../../../utils";
import { addMany } from "../calls";
import { Media } from "@repo/types";

export const uploadFile = (props: { path: string; file: File }) => {
  const metadata = {
    contentType: props.file.type,
  };
  const storageRef = ref(storage, `${props.path}/` + props.file.name);
  const uploadTask = uploadBytesResumable(storageRef, props.file, metadata);
  return new Promise<string>((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors

        switch (error.code) {
          case "storage/unauthorized":
            reject("User doesn't have permission to access the object");
            break;
          case "storage/canceled":
            reject("User canceled the upload");
            break;
          case "storage/unknown":
            reject("Unknown error occurred");
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve(url);
        });
      }
    );
  });
};

export const uploadMediaFiles = async (props: {
  metaId: string;
  path: string;
  files: File[];
}) => {
  const urls = await Promise.all(
    props.files.map((file) =>
      uploadFile({ path: "posts", file }).then((res) => res)
    )
  );
  return await addMany<Media>({
    collection: "media",
    docs: urls.map((url, i) => ({
      createdBy: FAKE_USER._id, //TODO
      size: props.files[i]?.size,
      path: url,
      name: props.files[i]?.name,
      meta: { postId: props.metaId },
      ...mediaType(props.files[i]!),
    })),
  });
};
