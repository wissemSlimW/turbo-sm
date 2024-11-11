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
    height: 60,
  },
  bodyContainer: {
    overflow: "hidden",
    display: "flex",
    position: "relative",
    flex: 1,
    flexDirection: "column",
  },
  backgroundLayer: { display: "flex", flex: 1, overflow: "hidden" },
  startSideBar: { width: "23.5vw" },
  body: { flex: 1, overflow: "hidden", display: "flex" },
  endSideBar: { width: "23.5vw" },
  midLayer: {
    position: "absolute",
    zIndex: 10,
    insetBlockEnd: 0,
    insetInlineEnd: 0,
  },
  "@media (max-width: 1024px)": {
    endSideBar: {
      width: "50px",
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
