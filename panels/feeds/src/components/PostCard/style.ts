import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    paddingBlock: theme.spacings.small,
    paddingInline: theme.spacings.medium,
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.borderRadiuses.medium,
    backgroundColor: theme.colors.background,
    gap: theme.spacings.small,
    boxShadow:
      "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)", //TODO Color
  },
}));
