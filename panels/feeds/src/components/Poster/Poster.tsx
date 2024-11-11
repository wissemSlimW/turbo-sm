import { PosterEmojiFace } from "@repo/icons/featured";
import { UserAvatar } from "@repo/user-avatar";
import { menuBtns } from "./constant";
import { DICTIONARY } from "./dict";
import { useStyles } from "./style";
import { MenuItemprops, PosterProps } from "./type";
import { PosterPopover } from "./component";
import { useState } from "react";
import { PosterPopoverProps } from "./component/PostPopover/type";
import { useAppTheme } from "@repo/styles";

export const Poster = (props: PosterProps) => {
  const [showPopup, setShowPopup] = useState<
    false | PosterPopoverProps["type"]
  >(false);
  const actions: { onClick: () => void }[] = [
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
  ];
  const menu: (MenuItemprops & { onClick?: () => void })[] = menuBtns.map(
    (btn, i) => ({
      ...btn,
      ...actions[i],
    })
  );
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <>
      <div className={classes.container}>
        <div className={classes.body}>
          <UserAvatar user={props.user} size={32} />
          <span
            className={classes.inputContainer}
            onClick={() => setShowPopup("text")}
          >
            <span>{DICTIONARY.inputPlaceholder}</span>
            <PosterEmojiFace />
          </span>
          {/* <button className={classes.publishBtn}>{DICTIONARY.publish}</button> */}
        </div>
        <div className={classes.footer}>
          {menu.map((item, key) => (
            <span key={key} className={classes.btn} onClick={item.onClick}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
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
