import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    height: 24,
    display: "flex",
    gap: theme.spacings.XSmall,
    paddingInline: theme.spacings.XSmall,
    paddingBlockEnd: theme.spacings.XSmall,
    justifyContent: "space-between",
    borderBlockEnd: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
  },
  btn: {
    cursor: "pointer",
    display: "flex",
    gap: theme.spacings.XSmall,
    alignItems: "center",
    "&:hover>span": {
      color: theme.colors.dark,
    },
  },
  btnLabel: {
    color: theme.colors.gray,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.regular,
  },
  btnLabelHighlighted: {
    color: theme.colors.dark,
  },
}));
