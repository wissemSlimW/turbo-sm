import { Fragment } from "react";
import { Eye } from "@repo/icons/bold";
import { useAppTheme } from "@repo/styles";
import { DICTIONARY } from "./dict";
import { useStyles } from "./style";
import { InteractionStatsProps } from "./type";

export const InteractionStats = (props: InteractionStatsProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <span className={classes.reactionBlock} onClick={props.onReactionsClick}>
        <span className={classes.reactionIcons}>
          {props.reactionIcons.map((icon, key) => (
            <Fragment key={key}>{icon}</Fragment>
          ))}
        </span>
        <span className={classes.label}>{`${props.totalReactionsCount} ${
          // props.totalReactionsCount > 1
          //   ? DICTIONARY.reactions
          //   : DICTIONARY.reaction
          ""
        }`}</span>
      </span>
      <span className={classes.statsBlock}>
        <span className={classes.label} onClick={props.onCommentsClick}>
          {`${props.totalCommentsCount} ${
            props.totalCommentsCount > 1
              ? DICTIONARY.comments
              : DICTIONARY.comment
          }`}
        </span>
        {/* <span className={classes.viewsSection} onClick={props.onViewsClick}>
          <Eye height={16} width={16} />
          <span className={classes.label}>
            {`${props.totalViewsCount} ${props.totalViewsCount > 1 ? DICTIONARY.views : DICTIONARY.view
              }`}
          </span>
        </span> */}
      </span>
    </div>
  );
};
