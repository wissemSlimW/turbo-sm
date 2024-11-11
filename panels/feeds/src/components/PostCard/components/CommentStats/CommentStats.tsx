import { Fragment, useMemo } from "react";
import { Divider } from "@repo/icons/bold";
import { useAppTheme } from "@repo/styles";
import { REACTIONS } from "../../constant";

import { getGroupedReaction } from "../../utils";
import { ReactionButton } from "../ReactionButton";
import { DICTIONARY } from "./dict";
import { useStyles } from "./style";
import { CommentStatsProps } from "./type";
import { Reaction } from "@repo/types";

export const CommentStats = (props: CommentStatsProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const reactionTypeStats = useMemo(
    () =>
      getGroupedReaction({
        reactions: props.comment.reactions,
        reactioncCuntOnDisplay: 2,
      }),
    [props.comment.reactions]
  );
  return (
    <div className={classes.container}>
      <ReactionButton
        onClick={(reactionType) => {
          props.onReactionClick(reactionType);
        }}
        renderbutton={
          <span className={classes.reactioncontainer}>
            {props.reactionOnComment
              ? REACTIONS[props.reactionOnComment]?.icon(16)
              : null}
            <span className={classes.label}>
              {props.reactionOnComment
                ? REACTIONS[props.reactionOnComment]?.label
                : DICTIONARY.reaction}
            </span>
          </span>
        }
      />
      <span
        className={classes.reactionStats}
        onClick={() => props.onStatsClick(props.comment.reactions!)}
      >
        <span className={classes.reactionContainer}>
          {reactionTypeStats.map(([key]) => (
            <Fragment key={key}>
              {REACTIONS[key as Reaction]?.icon(16)}
            </Fragment>
          ))}
        </span>
        <span className={classes.label}>
          {Object.keys(props.comment.reactions).length}
        </span>
      </span>
      {props.showReply && (
        <>
          <Divider />
          <span className={classes.label} onClick={props.onReplyClick}>
            {DICTIONARY.reply}
          </span>
        </>
      )}
      <Divider />
      <span
        className={classes.label}
        onClick={props.updateMode ? props.onCancelClick : props.onUpdateClick}
      >
        {props.updateMode ? DICTIONARY.cancel : DICTIONARY.update}
      </span>
      <Divider />
      <span className={classes.label} onClick={props.onDeleteClick}>
        {DICTIONARY.delete}
      </span>
    </div>
  );
};
