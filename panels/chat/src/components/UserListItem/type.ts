import { UserAvatarProps } from "@repo/user-avatar";

export type UserListItemProps = {
  user: UserAvatarProps["user"];
  online: boolean | string;
};
