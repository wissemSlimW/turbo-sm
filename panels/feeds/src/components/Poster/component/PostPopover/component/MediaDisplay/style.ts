import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.large,
    padding: theme.spacings.large,
    borderRadius: theme.borderRadiuses.medium,
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
  },
  mediaLayout: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    maxHeight: 350,
    overflow: "auto",
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)", //TODO
      borderRadius: theme.borderRadiuses.medium,
      backgroundColor: "#F5F5F5", //TODO
    },

    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: "#F5F5F5", //TODO
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: theme.borderRadiuses.medium,
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)", //TODO
      backgroundColor: "#d2d2d2", //TODO
    },
    "&::-webkit-scrollbar:horizontal": {
      height: "6px",
      backgroundColor: "#F5F5F5", //TODO
    },

    "&::-webkit-scrollbar-thumb:horizontal": {
      borderRadius: theme.borderRadiuses.medium,
      "-webkit-box-shadow": "inset 0 0 2px rgba(0,0,0,.3)", //TODO
      backgroundColor: "#d2d2d2", //TODO
    },
  },
  mediaContainer: {
    padding: theme.spacings.XXSmall,
    flex: 1,
    minWidth: "20%",
    maxWidth: "50%",
    aspectRatio: 1,
    borderRadius: theme.borderRadiuses.medium,
    display: "flex",
    position: "relative",
    "&:hover $containerOverLay": {
      display: "flex",
    },
  },
  containerOverLay: {
    display: "none",
    justifyContent: "end",
    padding: theme.spacings.small,
    position: "absolute",
    zIndex: 1,
    inset: 0,
    backgroundColor: "#ffffff26", //TODO
  },
  deleteBtn: {
    display: "flex",
    cursor: "pointer",
  },
  imageContainer: {
    width: theme.spacings.full,
    height: theme.spacings.full,
    borderRadius: theme.borderRadiuses.medium,
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "center",
  },
  VideoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.XSmall,
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacings.full,
    height: theme.spacings.full,
    borderRadius: theme.borderRadiuses.medium,
    backgroundColor: theme.colors.background,
    border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
  },
  videoTitle: {
    maxWidth: "90%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "center",
    color: theme.colors.dark,
    ...theme.typography.paragraph.small.regular,
  },
  uploadHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  uploadBtn: {
    padding: theme.spacings.small,
    display: "flex",
    gap: theme.spacings.small,
    alignItems: "center",
    borderRadius: theme.borderRadiuses.medium,
    backgroundColor: theme.colors.dark,
    cursor: "pointer",
  },
  uploadBtnLabel: {
    color: theme.colors.background,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.regular,
  },
  inputBtn: {
    display: "none",
  },
  removeItemsBtn: {
    cursor: "pointer",
  },
}));
