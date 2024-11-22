import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.small,
    paddingBlock: theme.spacings.small,
  },
  subMenu: { display: "flex", flexDirection: "column" },
  title: {
    color: theme.colors.dark,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.medium.regular,
  },
  link: {
    display: "flex",
    gap: theme.spacings.small,
    cursor: "pointer",
    borderRadius: theme.borderRadiuses.medium,
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.colors.backgroundOverlay,
    },
  },
  icon: {
    width: 56,
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: theme.colors.dark,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.medium,
  },
}));
