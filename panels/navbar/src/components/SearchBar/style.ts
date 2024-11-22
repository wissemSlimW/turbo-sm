import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: theme.spacings.small,
    alignItems: "center",
    paddingBlock: theme.spacings.small,
  },
  logo: {
    display: "flex",
    width: 40,
    height: 40,
    borderRadius: theme.borderRadiuses.rounded,
    overflow: "hidden",
  },
  searchInputContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacings.XSmall,
    color: theme.colors.dark,
    width: 250,
    maxWidth: 250,
    height: 40,
    border: theme.spacings.none,
    flex: 1,
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
    paddingInline: theme.spacings.small,
    borderRadius: theme.borderRadiuses.xLarge,
    "&:focus-within > :first-child": { display: "none" },
  },
  searchInput: {
    backgroundColor: theme.colors.invisible,
    border: theme.spacings.none,
    outline: theme.spacings.none,
    fontFamily: theme.fontFamily,
    flex: 1,
    ...theme.typography.paragraph.small.regular,
  },
}));
