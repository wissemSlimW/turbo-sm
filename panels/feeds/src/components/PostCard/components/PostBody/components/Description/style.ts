import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  text: { fontFamily: theme.fontFamily },
  shortText: {
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  longText: {
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  viewMore: {
    fontFamily: theme.fontFamily,
    color: theme.colors.blue,
    cursor: "pointer",
    ...theme.typography.paragraph.xSmall.medium,
  },
}));
