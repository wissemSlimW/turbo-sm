import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  container: { display: "flex", width: theme.spacings.full },
  paper: {
    "&&&": {
      borderRadius: theme.borderRadiuses.medium,
    },
  },
  carousel: {
    width: theme.spacings.full,
    "&>:nth-child(2)>div": {
      margin: theme.spacings.none,
      "&>ul>li": {
        aspectRatio: 1,
        border: "none",
        position: "relative",
        borderRadius: theme.borderRadiuses.XMedium,
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundColor: "#0202022e", //TODO
        },
      },
    },
    "&>:nth-child(2)>div>ul> .selected": {
      border: `${theme.borders.large}px solid ${theme.colors.background}`,
      "&:before": {
        backgroundColor: theme.colors.invisible,
      },
    },
    "& .carousel>div> .thumbs": {
      // display: "flex",
      textAlign: "center",
      paddingInline: theme.spacings.small,
      "& >li:not(.selected)": {
        cursor: "pointer",
      },
    },
  },
  carouselImageItem: {
    width: theme.spacings.full,
    aspectRatio: 1,
    objectFit: "contain",
    objectPosition: "center",
  },
  carouselVideoItem: {
    backgroundColor: "rgba(255, 255, 255, 0.80)", //TODO
    width: theme.spacings.full,
    height: theme.spacings.full,
    "&>div": { backgroundColor: "rgba(255, 255, 255, 0.57)" }, //TODO
  },
  thumbContainer: {
    borderRadius: theme.borderRadiuses.medium,
    "&>img": {
      objectFit: "cover",
    },
  },
  arrowBtn: {
    cursor: "pointer",
    position: "absolute",
    zIndex: 10,
    insetBlockStart: "calc(50% - 10px)",
    color: theme.colors.background,
    background: "#00000040", //TODO
    borderRadius: theme.borderRadiuses.rounded,
  },
  next: { insetInlineEnd: theme.spacings.small },
  previous: { insetInlineStart: theme.spacings.small },
  carouselVideoThumbnail: {
    width: theme.spacings.full,
    height: theme.spacings.full,
    borderRadius: theme.borderRadiuses.medium,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c7c7c773", //TODO
  },
}));
