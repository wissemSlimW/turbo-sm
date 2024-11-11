import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.small,
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
  hideScroll: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));
