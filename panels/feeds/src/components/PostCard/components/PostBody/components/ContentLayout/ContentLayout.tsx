import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
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
  console.log({ m: props.media });
  const theme = useAppTheme();
  const classes = useStyles({ theme, imgsNbs: `+${props.media.length - 5}` });
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
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${item.path})` }}
            ></div>
          ) : (
            <span onClick={() => props.handleMediaClick(item._id)}>
              <VideoPlayer video={item.path} full controls={false} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
