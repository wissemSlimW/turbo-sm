import { MenuButton } from "@repo/menu-button";
import { UserAvatar } from "@repo/user-avatar";
import { CardEdit, More, TrashSquare } from "@repo/icons/linear";
import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { HeaderProps } from "./type";
import { useMemo } from "react";
import { useLang } from "../../../../contexts";

export const Header = (props: HeaderProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();

  const headerActions = useMemo(
    () => [
      ...(true
        ? [
            {
              action: props.updatePost,
              label: (
                <span className={classes.menuLabelContainer}>
                  <CardEdit /> {translation.modify}
                </span>
              ),
            },
            {
              action: props.deletePost,
              label: (
                <span className={classes.menuLabelContainer}>
                  <TrashSquare /> {translation.delete}
                </span>
              ),
            },
          ]
        : []),
    ],
    [
      classes,
      props.user._id,
      props.post.createdBy,
      props.updatePost,
      props.deletePost,
    ]
  );
  return (
    <div className={classes.container}>
      <div className={classes.infoBlock}>
        <div>
          <UserAvatar user={props.postOwner} />
        </div>
        <div className={classes.detailsSection}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.subtitle}>{props.subtitle}</div>
        </div>
      </div>
      <div>
        {headerActions.length ? (
          <MenuButton icon={<More />} options={headerActions} />
        ) : (
          []
        )}
      </div>
    </div>
  );
};
