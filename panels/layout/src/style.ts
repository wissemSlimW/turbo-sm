import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";
export const useStyle = createUseStyles((theme: Theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: theme.colors.backgroundSecondary,
  },
  header: {
    display: "flex",
    position: "relative",
    zIndex: 1000,
    height: 56,
  },
  bodyContainer: {
    overflow: "hidden",
    display: "flex",
    position: "relative",
    flex: 1,
    flexDirection: "column",
  },
  backgroundLayer: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
    gap: theme.spacings.xLarge,
  },
  startSideBar: {
    width: "23.5vw",
    minWidth: 250,
    maxWidth: 350,
    display: "flex",
    flexDirection: "column",
  },
  body: {
    flex: 1,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  endSideBar: {
    width: "23.5vw",
    minWidth: 250,
    maxWidth: 350,
    display: "flex",
    flexDirection: "column",
  },
  midLayer: {
    position: "absolute",
    zIndex: 10,
    insetBlockEnd: 0,
    insetInlineEnd: 0,
  },
  "@media (max-width: 1024px)": {
    startSideBar: {
      display: "none",
    },
  },
  "@media (max-width: 700px)": {
    endSideBar: {
      display: "none",
    },
    startSideBar: {
      display: "none",
    },
  },
}));
