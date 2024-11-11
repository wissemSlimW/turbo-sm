import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "grid",
    gap: 10,
    width: "100%",
    height: 550,
    gridAutoColumns: "1fr",
    gridAutoRows: "1fr",
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)", // TODO
  },
  image: ({ theme }) => ({
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: theme.spacings.full,
    height: theme.spacings.full,
  }),
  tamplate: {
    position: "relative",
    "&::before": {
      content: ({ imgsNbs }: { imgsNbs: string; theme: Theme }) =>
        `'${imgsNbs}'`,
      position: "absolute",
      zIndex: 1,
      inset: 0,
      backgroundColor: "#02020270", // TODO
      color: "white",
      fontWeight: 600,
      fontSize: 14,
      fontFamily: ({ theme }) => theme.fontFamily,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});
