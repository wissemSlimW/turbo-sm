import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacings.medium,
  },
  image: { width: "50%" },
  title: {
    fontFamily: theme.fontFamily,
    color: theme.colors.dark,
    ...theme.typography.paragraph.large.semiBold,
  },
  link: {
    backgroundColor: theme.colors.blue,
    borderRadius: theme.borderRadiuses.medium,
    fontFamily: theme.fontFamily,
    paddingBlock: theme.spacings.small,
    paddingInline: theme.spacings.medium,
    color: theme.colors.white,
    textDecoration: "none",
    ...theme.typography.paragraph.xSmall.semiBold,
  },
}));
