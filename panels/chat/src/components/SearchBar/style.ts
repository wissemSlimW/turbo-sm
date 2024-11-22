import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacings.small,
    padding: theme.spacings.small,
  },
  label: {
    fontFamily: theme.fontFamily,
    color: theme.colors.dark,
    ...theme.typography.paragraph.small.semiBold,
  },
  input: {
    fontFamily: theme.fontFamily,
    color: theme.colors.dark,
    border: `${theme.borders.large}px solid ${theme.colors.backgroundOverlay} `,
    borderRadius: theme.borderRadiuses.medium,
    width: theme.spacings.full,
    paddingInline: theme.spacings.small,
    paddingBlock: theme.spacings.XSmall,
    backgroundColor: theme.colors.invisible,
    outline: "none",
  },
}));
