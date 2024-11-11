import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingBlockEnd: theme.spacings.small,
    paddingInline: theme.spacings.XSmall,
    borderBlockEnd: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
  },
  reactionBlock: {
    cursor: "pointer",
    display: "flex",
    gap: theme.spacings.XSmall,
    alignItems: "center",
  },
  reactionIcons: { display: "flex", alignItems: "center" },
  label: {
    fontFamily: theme.fontFamily,
    cursor: "pointer",
    color: theme.colors.gray,
    ...theme.typography.paragraph.xSmall.regular,
  },
  statsBlock: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacings.large,
  },
  viewsSection: {
    cursor: "pointer",
    display: "flex",
    gap: theme.spacings.XSmall,
    alignItems: "center",
  },
}));
