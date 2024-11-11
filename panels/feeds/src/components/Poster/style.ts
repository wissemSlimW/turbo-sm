import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.borderRadiuses.medium,
    paddingInline: theme.spacings.large,
    paddingBlock: theme.spacings.medium,
    gap: theme.spacings.small,
    backgroundColor: theme.colors.background,
    fontFamily: theme.fontFamily,
    marginInline: theme.spacings.small,
    boxShadow:
      "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)", //TODO Color
  },
  body: { display: "flex", gap: theme.spacings.small, alignItems: "center" },
  inputContainer: {
    cursor: "pointer",
    flex: 1,
    paddingBlock: theme.spacings.small,
    paddingInline: theme.spacings.large,
    borderRadius: theme.borderRadiuses.medium,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
    border: `1px solid ${theme.colors.backgroundOverlay}`,
    color: theme.colors.gray,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.regular,
  },
  publishBtn: {
    cursor: "pointer",
    fontFamily: theme.fontFamily,
    border: "none",
    padding: theme.spacings.small,
    borderRadius: theme.borderRadiuses.medium,
    backgroundColor: theme.colors.light,
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)", //TODO
    color: theme.colors.blue,
  },
  footer: { display: "flex", gap: theme.spacings.small, flexWrap: "wrap" },
  btn: {
    cursor: "pointer",
    fontFamily: theme.fontFamily,
    display: "flex",
    gap: theme.spacings.XSmall,
    ...theme.typography.paragraph.small.regular,
    color: theme.colors.dark,
  },
}));
