import { Divider } from "@repo/icons/bold";
import { useAppTheme } from "@repo/styles";
import { Fragment, useMemo } from "react";
import { REACTIONS } from "../../constant";

import { CloseHex, Edit, Reply, Trash } from "@repo/icons/linear";
import { Reaction } from "@repo/types";
import { getGroupedReaction } from "../../utils";
import { ReactionButton } from "../ReactionButton";
import { useStyles } from "./style";
import { CommentStatsProps } from "./type";
import { useLang } from "../../../../contexts";

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
  const { data: translation } = useLang();
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
                ? translation[REACTIONS[props.reactionOnComment]?.label]
                : translation.thumbsUp}
            </span>
          </span>
        }
      />
      {Object.keys(props.comment.reactions).length ? (
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
      ) : (
        []
      )}
      {props.showReply && (
        <>
          <Divider />
          <span className={classes.iconContainer} onClick={props.onReplyClick}>
            <Reply width={14} height={14} />
          </span>
        </>
      )}
      <Divider />
      <span
        className={classes.iconContainer}
        onClick={props.updateMode ? props.onCancelClick : props.onUpdateClick}
      >
        {props.updateMode ? (
          <CloseHex width={16} height={16} />
        ) : (
          <Edit width={16} height={16} />
        )}
      </span>
      <Divider />
      <span className={classes.iconContainer} onClick={props.onDeleteClick}>
        <Trash width={16} height={16} />
      </span>
    </div>
  );
};
