import { Dialog } from "@mui/material";
import { memo, useMemo, useState } from "react";
import { UserAvatar } from "@repo/user-avatar";
import { CloseSquare } from "@repo/icons/animated";
import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
import { ScrollArea } from "@repo/scroll-area";
import { REACTIONS } from "../../constant";
import { Reaction } from "@repo/types";
import { getGroupedReaction } from "../../utils";
import { useStyles } from "./style";
import { ReactionDialogProps, UserReaction } from "./type";
import { useLang } from "../../../../contexts";

export const ReactionDialog = (props: ReactionDialogProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const [tabOnDisplay, setTabOndisplay] = useState<Reaction | "all">("all");
  const groupedRactions = useMemo(
    (): [Reaction | "all", number][] => [
      ...getGroupedReaction({ reactions: props.reactions }),
    ],
    [props.reactions]
  );
  const handleClick = (tab: Reaction | "all") => {
    setTabOndisplay(tab);
  };
  const ListItem = memo(({ reaction }: { reaction: UserReaction }) => {
    return (
      <span className={classes.detailsBlock}>
        <span className={classes.avatarContainer}>
          <UserAvatar
            user={{
              firstName: reaction.firstName,
              imgUrl: reaction.imgUrl,
              lastName: reaction.lastName,
            }}
          />
          <span className={classes.userReaction}>
            {REACTIONS[reaction.reaction].icon(12)}
          </span>
        </span>
        <span className={classes.info}>
          <span className={classes.title}>
            {`${reaction?.firstName} ${reaction?.lastName}`}
          </span>
        </span>
      </span>
    );
  });

  const Tab = (
    props: ReactionDialogProps & { reactionType: Reaction | "all" }
  ) => {
    const [limit, setLimit] = useState(
      props.itemsLoadingParams.reactionsAtInitialRequest
    );
    const { list: reactions, ready } = props.useReactionList({
      reactions: props.reactions,
      reactionType: props.reactionType,
      limit,
    });

    return (
      <ScrollArea
        cb={(visible) => {
          visible &&
            setLimit(
              (prev) => prev + props.itemsLoadingParams.reactionsPerRequest
            );
        }}
        loadingComponent={
          <span className={classes.loaderContainer}>
            <span className={classes.loader}></span>
          </span>
        }
        hideLoadingComponent={ready && reactions.length < limit}
      >
        <div className={classes.reactionContainer}>
          {reactions.map((reaction) => (
            <ListItem key={reaction._id} reaction={reaction} />
          ))}
        </div>
      </ScrollArea>
    );
  };

  const { data: translation } = useLang();
  return (
    <Dialog
      onClose={props.handleClose}
      open
      fullWidth
      slotProps={{ backdrop: { className: classes.backdrop } }}
      PaperProps={{ className: classes.paper }}
    >
      <div className={classes.header}>
        <h2 className={classes.mainTitle}>{translation.reactions}</h2>
        <span className="close-dialog" onClick={props.handleClose}>
          <CloseSquare
            variant="linear"
            hover={{ variant: "bold", classname: "close-dialog" }}
          />
        </span>
      </div>
      <div className={classes.menu}>
        <span
          onClick={() => handleClick("all")}
          className={joinClassNames(
            classes.menuItem,
            tabOnDisplay === "all" && classes.selected
          )}
        >{`${translation.all} ${Object.keys(props.reactions).length}`}</span>
        {groupedRactions.map((item) => (
          <span
            key={item[0]}
            onClick={() => handleClick(item[0] as Reaction)}
            className={joinClassNames(
              classes.menuItem,
              tabOnDisplay === item[0] && classes.selected
            )}
          >
            {item[1]} {REACTIONS[item[0] as Reaction]?.icon(21)}
          </span>
        ))}
      </div>
      <div className={classes.content}>
        <Tab {...props} reactionType={tabOnDisplay} />
      </div>
    </Dialog>
  );
};
