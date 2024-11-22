import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: theme.spacings.small,
    paddingBlock: theme.spacings.XXSmall,
    cursor: "pointer",
    borderRadius: theme.borderRadiuses.medium,
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.colors.backgroundOverlay,
    },
  },
  avatar: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  tagContainer: {
    position: "absolute",
    insetInlineEnd: -theme.spacings.XXSmall,
    insetBlockEnd: -theme.spacings.XXSmall,
    zIndex: 2,
    padding: theme.spacings.XXSmall,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadiuses.rounded,
    color: theme.colors.success,
    fontSize: 8,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph["3xSmall"].bold,
  },
  tag: {
    width: theme.spacings.small,
    height: theme.spacings.small,
    borderRadius: theme.borderRadiuses.rounded,
    backgroundColor: theme.colors.success,
  },
  label: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: theme.spacings.small,
    fontFamily: theme.fontFamily,
  },
}));
