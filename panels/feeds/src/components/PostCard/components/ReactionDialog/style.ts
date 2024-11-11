import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  backdrop: {
    backgroundColor: "#00000030", //TODO
  },
  paper: {
    "&&&": {
      boxShadow: "none",
      borderRadius: theme.borderRadiuses.medium,
      display: "flex",
      flexDirection: "column",
      height: 500,
    },
  },
  header: {
    padding: theme.spacings.large,
    display: "flex",
    justifyContent: "space-between",
  },
  mainTitle: {
    fontFamily: theme.fontFamily,
    marginBlock: theme.spacings.none,
    color: theme.colors.dark,
    ...theme.typography.paragraph.medium.medium,
  },
  menu: {
    height: 36,
    paddingBlock: theme.spacings.small,
    paddingInline: theme.spacings.large,
    display: "flex",
    gap: theme.spacings.medium,
    alignItems: "start",
    borderBlockEnd: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
  },
  menuItem: {
    cursor: "pointer",
    display: "flex",
    fontFamily: theme.fontFamily,
    gap: theme.spacings.XSmall,
    alignItems: "center",
    paddingInline: theme.spacings.small,
    paddingBlockEnd: theme.spacings.XSmall,
  },
  selected: {
    borderRadius: theme.borderRadiuses.small,
    borderBlockEnd: `${theme.borders.XXXLarge}px solid ${theme.colors.blue}`,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    gap: theme.spacings.small,
    paddingBlock: theme.spacings.small,
    paddingInline: theme.spacings.large,
    maxHeight: 358,
  },
  reactionContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.small,
  },
  detailsBlock: { display: "flex", gap: theme.spacings.XSmall },
  avatarContainer: {
    position: "relative",
    paddingInlineEnd: theme.spacings.small,
  },
  userReaction: {
    position: "absolute",
    insetBlockEnd: 0,
    insetInlineEnd: 0,
    zIndex: 1,
    borderRadius: theme.borderRadiuses.rounded,
    display: "flex",
    padding: theme.spacings.XXSmall,
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
  },
  info: { display: "flex", flexDirection: "column", justifyContent: "center" },
  title: {
    fontFamily: theme.fontFamily,
    color: theme.colors.dark,
    ...theme.typography.paragraph.small.regular,
  },
  subtitle: {
    color: theme.colors.gray,
    ...theme.typography.paragraph.xSmall.regular,
  },
  loaderContainer: {
    display: "flex",
    padiing: theme.spacings.small,
    justifyContent: "center",
  },
  loader: {
    width: 48,
    height: 48,
    border: `${theme.borders.XXLarge}px solid ${theme.colors.background}`,
    borderBlockEndColor: theme.colors.blue,
    borderRadius: theme.borderRadiuses.rounded,
    display: "inline-block",
    boxSizing: "border-box",
    animation: "$rotation 1s linear infinite",
  },
  "@keyframes rotation": {
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
