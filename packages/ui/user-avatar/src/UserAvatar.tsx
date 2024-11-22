import { useStyles } from "./style";
import { UserAvatarProps } from "./type";
import { avatarColors } from "./const";
import { useAppTheme } from "@repo/styles";

export const UserAvatar = ({ size = 41, ...props }: UserAvatarProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const getStyle = () => {
    const colors = props.user?.firstName?.length
      ? avatarColors[
          props.user?.firstName.charCodeAt(props.user?.firstName.length - 1) %
            avatarColors.length
        ]
      : avatarColors[0];
    return {
      backgroundColor: colors!.background,
      color: colors!.color,
    };
  };
  return props.user?.imgUrl ? (
    <img
      className={classes.avatar}
      width={size}
      height={size}
      src={props.user?.imgUrl}
      alt="user avatar"
    />
  ) : (
    <span
      style={{ width: size, height: size, ...getStyle() }}
      className={classes.placeholder}
    >{`${props.user?.firstName?.[0]?.toUpperCase() || ""}.${
      props.user?.lastName?.[0]?.toUpperCase() || ""
    }`}</span>
  );
};
