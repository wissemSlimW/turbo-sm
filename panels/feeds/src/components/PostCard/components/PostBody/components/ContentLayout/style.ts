import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
  ({ theme, imgsNbs }: { theme: Theme; imgsNbs: string }) => ({
    container: {
      display: "grid",
      gap: theme.spacings.XSmall,
      width: "100%",
      height: "max(350px, 50dvh)",
      maxHeight: 550,
      gridAutoColumns: "1fr",
      gridAutoRows: "1fr",
    },
    imageContainer: {
      borderRadius: theme.borderRadiuses.medium,
      overflow: "hidden",
      boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)", // TODO
    },
    image: {
      objectFit: "cover",
      objectPosition: "center",
      width: theme.spacings.full,
      height: theme.spacings.full,
    },
    tamplate: {
      position: "relative",
      "&::before": {
        content: `'${imgsNbs}'`,
        position: "absolute",
        zIndex: 1,
        inset: theme.spacings.none,
        backgroundColor: "#02020270", // TODO
        color: theme.colors.white,
        fontFamily: theme.fontFamily,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...theme.typography.paragraph.small.semiBold,
      },
    },
  })
);
