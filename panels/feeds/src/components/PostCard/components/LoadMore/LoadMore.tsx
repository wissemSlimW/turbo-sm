import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { LoadMoreProps } from "./type";

export const LoadMore = (props: LoadMoreProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return props.loadedCount < props.totalCount && props.totalCount > 0 ? (
    <span className={classes.container} onClick={props.onClick}>
      <span className={classes.text}>{props.text}</span>
      {props.loadedCount ? (
        <span
          className={classes.text}
        >{`${props.loadedCount}/${props.totalCount}`}</span>
      ) : (
        []
      )}
    </span>
  ) : (
    <></>
  );
};
