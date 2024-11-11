import ReactPlayer from "react-player";
import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
import { useStyles } from "./style";
import { VideoPlayerProps } from "./type";

export const VideoPlayer = ({
  controls = true,
  full,
  ...props
}: VideoPlayerProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  return (
    <div
      className={joinClassNames(
        classes.videoPlayerContainer,
        !!full ? classes.fullscreen : ""
      )}
    >
      <ReactPlayer {...props} controls={controls} url={props.video} />
    </div>
  );
};
