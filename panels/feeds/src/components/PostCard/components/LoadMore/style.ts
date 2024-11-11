import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: theme.colors.gray,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.regular,
  },
}));
