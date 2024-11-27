import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  ({ theme, variantColor }: { theme: Theme; variantColor: string }) => ({
    dialogBackDrop: {
      backgroundColor: "#3333334D", // TODO
    },
    dialogBlock: {
      "&&&": {
        borderRadius: theme.borderRadiuses.medium,
        paddingInlineStart: theme.spacings.small,
        overflow: "visible",
        backgroundColor: variantColor,
      },
    },
    dialogBlockNoMaxWidth: {
      "&&&": { maxWidth: "none", width: "auto" },
    },
    dialogContainer: {
      display: "flex",
      flexDirection: "column",
      borderEndEndRadius: theme.borderRadiuses.medium,
      borderStartEndRadius: theme.borderRadiuses.medium,
      paddingBlock: theme.spacings.large,
      paddingInlineStart: theme.spacings.small,
      paddingInlineEnd: theme.spacings.large,
      background: theme.colors.background,
      boxSizing: "border-box",
    },
    headerBlock: {
      display: "flex",
      justifyContent: "space-between",
      gap: theme.spacings.small,
      alignItems: "center",
    },
    title: {
      color: variantColor,
      fontFamily: theme.fontFamily,
      ...theme.typography.paragraph.medium.medium,
    },
    closeBtnContainer: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    closeBtn: { padding: theme.spacings.none },
    closeIcon: { width: 24, height: 24 },
    contentBlock: {
      paddingBlock: 10,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacings.small,
      maxHeight: "70vh",
      overflow: "auto",
    },
    footerBlock: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    controlBlock: {
      display: "flex",
      gap: theme.spacings.small,
      alignItems: "center",
    },
    deleteBtn: {
      borderRadius: theme.borderRadiuses.medium,
      "&&&": { background: "#FFE7D8" },
    },
    deleteBtnIcon: {
      "&&&>:first-child": {
        fill: "#FF493F",
        stroke: "#FF493F",
      },
      "&&&>:not(:first-child)": {
        stroke: "#FFE7D8",
        fill: "#FFE7D8",
      },
    },

    button: {
      cursor: "pointer",
      height: 44,
      outline: "none",
      border: "none",
      padding: theme.spacings.small,
      borderRadius: theme.borderRadiuses.medium,
      fontFamily: theme.fontFamily,
      ...theme.typography.paragraph.medium.medium,
    },
    delete: {
      color: theme.colors.danger,
      backgroundColor: theme.colors.danger,
    },
    cancelBtn: {
      color: theme.colors.gray,
      backgroundColor: theme.colors.background,
      border: `1px solid ${theme.colors.gray}`,
      "&:hover": {
        color: theme.colors.background,
        backgroundColor: theme.colors.dark,
        border: `1px solid ${theme.colors.dark}`,
      },
    },
    submitBtn: {
      color: theme.colors.background,
      backgroundColor: variantColor,
      "&:hover": {
        filter: "brightness(1.1)",
      },
    },
  })
);
