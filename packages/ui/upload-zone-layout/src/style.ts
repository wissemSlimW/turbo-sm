import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.small,
  },
  textInputContainer: { display: "flex", gap: theme.spacings.small },
  textInput: {
    fontFamily: theme.fontFamily,
    resize: "none",
    flex: 1,
    outline: "none",
    border: "none",
  },
  dropZoneContaine: {
    cursor: "pointer",
    // flex: 2,
    paddingBlock: theme.spacings.XSmall,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacings.XSmall,
    borderRadius: theme.borderRadiuses.medium,
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
    border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
    "&:hover": {
      backgroundColor: theme.colors.backgroundOverlay,
    },
  },
  importText: {
    fontFamily: theme.fontFamily,
    color: theme.colors.dark,
    ...theme.typography.paragraph.medium.regular,
  },
  droptext: {
    fontFamily: theme.fontFamily,
    color: theme.colors.dark,
    ...theme.typography.paragraph.small.regular,
  },
}));
