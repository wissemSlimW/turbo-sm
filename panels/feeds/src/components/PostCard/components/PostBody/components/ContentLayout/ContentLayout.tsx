import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
import { useState } from "react";
import { VideoPlayer } from "../VideoPlayer";
import { useStyles } from "./style";
import { ContentLayoutProps } from "./type";

const gridTypes: Record<number, string> = {
  1: `'area0'`,
  2: `'area0 area1'`,
  3: `'area0 area1'
  'area0 area2'`,
  4: `'area0 area1'
  'area2 area3'`,
  5: `'area0 area2'
  'area0 area2'
  'area0 area3'
  'area1 area3'
  'area1 area4'
  'area1 area4'`,
};
export const ContentLayout = (props: ContentLayoutProps) => {
  const theme = useAppTheme();
  const classes = useStyles({
    theme: { theme, imgsNbs: `+${props.media.length - 5}` },
  });
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className={classes.container}
      style={{
        gridTemplateAreas:
          gridTypes[props.media.length > 5 ? 5 : props.media.length],
      }}
    >
      {props.media.slice(0, 5).map((item, i) => (
        <div
          key={item._id}
          onClick={() => props.handleMediaClick(item._id)}
          className={joinClassNames(
            classes.imageContainer,
            i === 4 && props.media.length > 5 ? classes.tamplate : ""
          )}
          style={{ gridArea: `area${i}` }}
        >
          {item.isImage ? (
            <img className={classes.image} src={item.path}></img>
          ) : (
            <span
              onClick={() => {
                props.handleMediaClick(item._id);
                setPlaying(false);
              }}
            >
              <VideoPlayer
                video={item.path}
                full
                controls={false}
                playing={playing}
                loop
                volume={0}
              />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
