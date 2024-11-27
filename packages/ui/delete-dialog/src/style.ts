import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  message: {
    fontFamily: theme.fontFamily,
    color: theme.colors.dark,
    ...theme.typography.paragraph.small.medium,
  },
}));
