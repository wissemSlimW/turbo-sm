import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  ({
    theme,
    label,
    isActive,
  }: {
    theme: Theme;
    label: string;
    isActive: boolean;
  }) => ({
    container: {
      borderBlockEnd: `${theme.borders.xLarge}px solid ${isActive ? theme.colors.blue : theme.colors.invisible}`,
      paddingBlock: theme.spacings.XSmall,
      flex: 1,
    },
    link: {
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      color: isActive ? theme.colors.blue : theme.colors.dark,
      backgroundColor: theme.colors.invisible,
      borderRadius: theme.borderRadiuses.medium,
      paddingBlock: theme.spacings.medium,
      flex: 1,
      "&:hover": {
        "&:before": {
          fontFamily: theme.fontFamily,
          insetBlockStart: "120%",
          textAlign: "center",
          zIndex: 100,
          padding: theme.spacings.small,
          content: `'${label}'`,
          color: theme.colors.dark,
          backgroundColor: theme.colors.backgroundOverlay,
          borderRadius: theme.borderRadiuses.medium,
          position: "absolute",
          ...theme.typography.paragraph.xSmall.medium,
        },
      },
    },
    linkHover: {
      "&:hover": {
        backgroundColor: theme.colors.backgroundOverlay,
      },
    },
  })
);
