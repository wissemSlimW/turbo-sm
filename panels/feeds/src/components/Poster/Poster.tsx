import { PosterEmojiFace } from "@repo/icons/featured";
import { UserAvatar } from "@repo/user-avatar";
import { menuBtns } from "./constant";
import { useStyles } from "./style";
import { MenuItemprops, PosterProps } from "./type";
import { PosterPopover } from "./component";
import { useMemo, useState } from "react";
import { PosterPopoverProps } from "./component/PostPopover/type";
import { useAppTheme } from "@repo/styles";
import { useLang } from "../../contexts";

export const Poster = (props: PosterProps) => {
  const [showPopup, setShowPopup] = useState<
    false | PosterPopoverProps["type"]
  >(false);
  const actions: { onClick: () => void }[] = useMemo(
    () => [
      {
        onClick: () => {
          setShowPopup("media");
        },
      }, // Image/vidéo
      {
        onClick: () => {
          setShowPopup("documents");
        },
      }, // Attachement
      {
        onClick: () => {
          setShowPopup("text");
        },
      }, // Event
      {
        onClick: () => {
          setShowPopup("text");
        },
      }, // Mention
      {
        onClick: () => {
          setShowPopup("text");
        },
      }, // Hashtag
    ],
    [setShowPopup]
  );
  const menu: (MenuItemprops & { onClick?: () => void })[] = useMemo(
    () =>
      menuBtns.map((btn, i) => ({
        ...btn,
        ...actions[i],
      })),
    [menuBtns, actions]
  );
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.body}>
          <UserAvatar user={props.user} size={32} />
          <span
            className={classes.inputContainer}
            onClick={() => setShowPopup("text")}
          >
            <span>{translation.postInputPlaceholder}</span>
            <PosterEmojiFace />
          </span>
        </div>
        <div className={classes.footer}>
          {menu.map((item, key) => (
            <span key={key} className={classes.btn} onClick={item.onClick}>
              <span>{item.icon}</span>
              <span>{translation[item.label]}</span>
            </span>
          ))}
        </div>
      </div>
      {showPopup && (
        <PosterPopover
          publishAction={({ cb, newFiles, text, hashtags }) =>
            props.actions.addPost({
              cb,
              files: newFiles,
              text,
              hashtags,
            })
          }
          type={showPopup}
          setType={(type) =>
            setShowPopup((prev) => (prev === type ? "text" : type))
          }
          user={props.user}
          handleClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};
