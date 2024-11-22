import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    backgroundColor: theme.colors.background,
    width: "100%",
    justifyContent: "space-between",
    boxShadow: "1px 0px 7px #00000025",
    gap: theme.spacings.xLarge,
  },
  logoContainer: {
    width: "23.5dvw",
    minWidth: 250,
    maxWidth: 350,
  },
  linksContainer: { flex: 1, display: "flex", justifyContent: "center" },
  links: {
    flex: 1,
    maxWidth: 750,
    display: "flex",
    justifyContent: "center",
    paddingInline: theme.spacings.small,
    boxSizing: "border-box",
  },
  menu: {
    width: "23.5dvw",
    minWidth: 250,
    maxWidth: 350,
    display: "flex",
    gap: theme.spacings.small,
    paddingInline: theme.spacings.small,
    justifyContent: "end",
    alignItems: "center",
    boxSizing: "border-box",
  },
  menuIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.black,
    width: 40,
    height: 40,
    backgroundColor: theme.colors.backgroundOverlay,
    borderRadius: theme.borderRadiuses.rounded,
    cursor: "pointer",
    "&:hover": { filter: "brightness(0.8)" },
  },

  "@media (max-width: 1024px)": {
    logoContainer: {
      display: "none",
    },
  },
  "@media (max-width: 700px)": {
    menu: {
      display: "none",
    },
    logoContainer: {
      display: "none",
    },
  },
}));
