import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    gap: theme.spacings.large,
    paddingBlock: theme.spacings.large,
    width: 750, // TODO
    background: theme.colors.backgroundSecondary,
  },
  emptyMessageCard: {
    fontFamily: theme.fontFamily,

    height: 150,
    backgroundColor: "white",
    boxShadow: "0px 0px 1px 0px #00000026",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollAreaContainer: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flex: 1,
  },
  postsContainer: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
    padding: 10,
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacings.small,
    gap: 20,
  },
  loaderWrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.background,
    gap: 10,
    borderRadius: 10,
    height: 300,
    padding: 20,
    boxShadow:
      "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)", //TODO Color
  },
  loaderHeader: { display: "flex", gap: 10, alignItems: "center" },
  loaderBody: { display: "flex", flex: 1 },
  loaderFooter: {
    display: "flex",
    justifyContent: "space-between",
    paddingInline: 30,
  },
  loaderCol: { display: "flex", flexDirection: "column", gap: 10 },
  loaderIcon: {
    height: 44,
    width: 44,
    borderRadius: "50%",
  },
  loaderlabel: {
    height: 14,
    width: 100,
    borderRadius: 30,
  },
  loaderBtn: {
    height: 30,
    width: 150,
    borderRadius: 30,
  },
  animation: {
    animation: "$placeHolderShimmer 1.25s forwards linear infinite",
    background:
      "linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%)",
    backgroundSize: "800px 104px",
    position: "relative",
  },
  "@keyframes placeHolderShimmer": {
    "0%": {
      backgroundPosition: "-468px 0",
    },
    "100%": {
      backgroundPosition: "468px 0",
    },
  },
}));
