import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  avatar: {
    borderRadius: theme.borderRadiuses.rounded,
    objectFit: "cover",
    objectPosition: "center",
  },
  placeholder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontFamily: theme.fontFamily,
    borderRadius: theme.borderRadiuses.rounded,
  },
}));
