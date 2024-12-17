import { useAppTheme } from "@repo/styles";
import { Fragment } from "react";
import { useStyles } from "./style";
import { InteractionStatsProps } from "./type";
import { useLang } from "../../../../contexts";

export const InteractionStats = (props: InteractionStatsProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <div className={classes.container}>
      <span className={classes.reactionBlock} onClick={props.onReactionsClick}>
        <span className={classes.reactionIcons}>
          {props.reactionIcons.map((icon, key) => (
            <Fragment key={key}>{icon}</Fragment>
          ))}
        </span>
        <span className={classes.label}>
          {props.totalReactionsCount ? `${props.totalReactionsCount}` : []}
        </span>
      </span>
      <span className={classes.statsBlock}>
        <span className={classes.label} onClick={props.onCommentsClick}>
          {`${props.totalCommentsCount} ${
            props.totalCommentsCount > 1
              ? translation.comments
              : translation.comment
          }`}
        </span>
      </span>
    </div>
  );
};
