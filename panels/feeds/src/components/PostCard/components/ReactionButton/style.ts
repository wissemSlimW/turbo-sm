import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paper: {
    "&&&": {
      borderRadius: theme.borderRadiuses.xLarge,
      backgroundColor: theme.colors.background,
      paddingBlock: theme.spacings.XSmall,
      paddingInline: theme.spacings.small,
      boxShadow:
        "0px 8px 10px -6px rgba(16, 24, 40, 0.10), 0px 20px 25px -5px rgba(16, 24, 40, 0.10)", //TODO
    },
  },
  menuList: {
    paddingInline: theme.spacings.small,
    borderRadius: theme.borderRadiuses.medium,
    position: "relative",
  },
  menuItem: {
    display: "flex",
    gap: theme.spacings.small,
  },
  reactionContainer: {
    height: 34,
    cursor: "pointer",
    position: "relative",
    transition: "all 0.5s ease 0s",
    "&:hover": {
      top: -10,
    },
  },
}));
