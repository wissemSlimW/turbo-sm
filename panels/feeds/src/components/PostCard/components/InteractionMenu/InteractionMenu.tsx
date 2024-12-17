import { Message, Send2, ThumbsUp } from "@repo/icons/animated";
import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
import { REACTIONS } from "../../constant";
import { ReactionButton } from "../ReactionButton";
import { useStyles } from "./style";
import { InteractionMenuProps } from "./type";
import { useLang } from "../../../../contexts";

export const InteractionMenu = (props: InteractionMenuProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <div className={classes.container}>
      <span className={`${classes.btn}`}>
        <ReactionButton
          onClick={props.onReactionClick}
          renderbutton={
            props.userPostReaction ? (
              <span className={`${classes.btn}`}>
                {REACTIONS[props.userPostReaction]?.icon(24)}
                <span className={classes.btnLabel}>
                  {translation[REACTIONS[props.userPostReaction]?.label]}
                </span>
              </span>
            ) : (
              <span className={`${classes.btn} reaction-btn`}>
                <ThumbsUp
                  variant="linear"
                  hover={{ classname: "reaction-btn", variant: "bold" }}
                />
                <span
                  className={joinClassNames(
                    classes.btnLabel,
                    props.userPostReaction ? classes.btnLabelHighlighted : ""
                  )}
                >
                  {translation.thumbsUp}
                </span>
              </span>
            )
          }
        />
      </span>
      <span
        className={`${classes.btn} comment-btn`}
        onClick={props.onCommentClick}
      >
        <Message
          variant="linear"
          hover={{ classname: "comment-btn", variant: "bold" }}
        />
        <span className={classes.btnLabel}>{translation.comment}</span>
      </span>
      <span
        className={`${classes.btn} message-btn`}
        onClick={props.onMessageClick}
      >
        <Send2
          variant="linear"
          hover={{ classname: "message-btn", variant: "bold" }}
        />
        <span className={classes.btnLabel}>{translation.message}</span>
      </span>
    </div>
  );
};
