import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: theme.spacings.XSmall,
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.XSmall,
  },
  commentDetails: {
    display: "flex",
    flexDirection: "column",
    paddingInline: theme.spacings.large,
    paddingBlock: theme.spacings.small,
    border: `1px solid ${theme.colors.backgroundOverlay}`,
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
    borderRadius: theme.borderRadiuses.medium,
  },
  commentHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    color: theme.colors.dark,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.regular,
  },
  dateLabel: {
    color: theme.colors.gray,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.xSmall.regular,
  },
  updateBlock: {
    display: "flex",
    gap: theme.spacings.small,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 0,
    border: "none",
    outline: "none",
    backgroundColor: theme.colors.invisible,
    color: theme.colors.dark,
    ...theme.typography.paragraph.small.regular,
  },
  sendBtn: {
    cursor: "pointer",
    border: "none",
    outline: "none",
    backgroundColor: theme.colors.invisible,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
