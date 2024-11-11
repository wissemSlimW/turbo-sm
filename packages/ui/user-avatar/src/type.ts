export type UserAvatarProps = {
  user: { firstName: string; lastName: string; imgUrl: string } | undefined;
  size?: number;
};
