import { useStyles } from "./style";
import { CarouselDialogProps } from "./type";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Dialog } from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@repo/icons/animated";
import { joinClassNames } from "@repo/utils";
import { Fragment, useState } from "react";
import { VideoPlayer } from "../PostBody/components";
import { Video } from "@repo/icons/linear";
import { useAppTheme } from "@repo/styles";

export const CarouselDialog = (props: CarouselDialogProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const [selected, setSelected] = useState(props.selected);
  return (
    <Dialog
      open
      onClose={props.handleClose}
      PaperProps={{ className: classes.paper }}
      fullWidth
    >
      <div className={classes.container}>
        <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={true}
          thumbWidth={60}
          className={classes.carousel}
          selectedItem={selected}
          infiniteLoop={false}
          emulateTouch={true}
          renderArrowNext={(
            clickHandler: () => void,
            hasNext: boolean,
            label: string
          ) =>
            hasNext ? (
              <span
                onClick={() => {
                  clickHandler();
                  setSelected((prev) => prev + 1);
                }}
                title={label}
                className={joinClassNames(
                  classes.arrowBtn,
                  classes.next,
                  "next-arrow"
                )}
              >
                <ArrowCircleRight
                  size="34px"
                  variant="linear"
                  hover={{ classname: "next-arrow", variant: "bold" }}
                />
              </span>
            ) : (
              []
            )
          }
          renderArrowPrev={(
            clickHandler: () => void,
            hasprevious: boolean,
            label: string
          ) =>
            hasprevious ? (
              <span
                onClick={() => {
                  clickHandler();
                  setSelected((prev) => prev - 1);
                }}
                title={label}
                className={joinClassNames(
                  classes.arrowBtn,
                  classes.previous,
                  "previous-arrow"
                )}
              >
                <ArrowCircleLeft
                  size="34px"
                  variant="linear"
                  hover={{ classname: "previous-arrow", variant: "bold" }}
                />
              </span>
            ) : (
              []
            )
          }
          renderThumbs={(items) =>
            items.map((item, i) => (
              <span
                key={props.media[i]?._id}
                className={classes.thumbContainer}
              >
                {props.media[i]?.isVideo ? (
                  <span className={classes.carouselVideoThumbnail}>
                    <Video width={100} height={100} />
                  </span>
                ) : (
                  item
                )}
              </span>
            ))
          }
        >
          {props.media.map((item, i) => (
            <Fragment key={item._id}>
              {item.isImage ? (
                <img
                  src={item.path}
                  key={item._id}
                  className={classes.carouselImageItem}
                />
              ) : (
                <span className={classes.carouselVideoItem}>
                  {selected === i && <VideoPlayer video={item.path} full />}
                </span>
              )}
            </Fragment>
          ))}
        </Carousel>
      </div>
    </Dialog>
  );
};
