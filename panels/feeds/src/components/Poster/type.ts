import { ReactElement } from "react";

import { UserAvatarProps } from "@repo/user-avatar";
import { PostDataType } from "./component";

export type MenuItemprops = {
  icon: ReactElement;
  label: "imageOrVideo" | "attachements" | "mention" | "hashtag";
};

export type PosterProps = {
  data?: PostDataType & { postId: string };
  user: UserAvatarProps["user"];
  actions: {
    addPost: (props: {
      text: string;
      hashtags: string[];
      files: File[];
      cb: () => void;
    }) => void;
    updatePost: (props: {
      text: string;
      newFiles: File[];
      removedFiles: string[];
      hashtags: string[]; // TODO
      postId: string;
      cb: () => void;
    }) => void;
  };
};
