import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100%",
  },
  listContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacings.small,
  },
  loadingElement: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacings.small,
    "&>:first-child": {
      display: "flex",
      width: 40,
      aspectRatio: 1,
      borderRadius: theme.borderRadiuses.rounded,
    },
    "&>:last-child": {
      display: "flex",
      flex: 1,
      height: 24,
      borderRadius: theme.borderRadiuses.xLarge,
    },
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
