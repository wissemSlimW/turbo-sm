import { useAppTheme } from "@repo/styles";
import { UserAvatar } from "@repo/user-avatar";
import { useStyles } from "./style";
import { UserListItemProps } from "./type";

export const UserListItem = (props: UserListItemProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <span className={classes.container}>
      <span className={classes.avatar}>
        <UserAvatar user={props.user} />
        <span className={classes.tagContainer}>
          {props.online === true ? (
            <div className={classes.tag}></div>
          ) : props.online === false ? (
            <></>
          ) : (
            props.online
          )}
        </span>
      </span>
      <span
        className={classes.label}
      >{`${props.user?.firstName} ${props.user?.lastName}`}</span>
    </span>
  );
};
