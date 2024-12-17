import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacings.medium,
    gap: theme.spacings.small,
    maxWidth: 700,
    minHeight: 430, //TODO check the ui Size
  },
  header: {
    display: "flex",
    gap: theme.spacings.small,
  },
  infoBlock: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  closeBtnContainer: {
    cursor: "pointer",
  },
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.small,
    overflow: "auto",
  },

  menu: {
    display: "flex",
    columnGap: theme.spacings.medium,
    rowGap: theme.spacings.XSmall,
    flexWrap: "wrap",
  },
  menuLabel: {
    fontFamily: theme.fontFamily,
    color: theme.colors.gray,
    ...theme.typography.paragraph.small.regular,
  },
  btn: {
    cursor: "pointer",
    display: "flex",
    fontFamily: theme.fontFamily,
    gap: theme.spacings.XSmall,
  },
  publishBtn: {
    border: "none",
    fontFamily: theme.fontFamily,
    cursor: "pointer",
    borderRadius: theme.borderRadiuses.medium,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacings.small,
    backgroundColor: theme.colors.light,
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)", //TODO
    color: theme.colors.blue,
  },
  paper: {
    "&&&": {
      boxShadow: "none",
      borderRadius: theme.borderRadiuses.medium,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
  },
  title: {
    color: theme.colors.dark,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.regular,
  },
  subtitle: {
    color: theme.colors.gray,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.xSmall.regular,
  },
}));
