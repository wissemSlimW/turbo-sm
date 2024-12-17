import { AddItem, DocumentCopy, Video } from "@repo/icons/linear";
import { CloseSquare } from "@repo/icons/animated";
import { CloseSquare as CloseBtn } from "@repo/icons/bold";
import { joinClassNames } from "@repo/utils";
import { useStyles } from "./style";
import { MediaDisplayProps } from "./type";
import { useAppTheme } from "@repo/styles";
import { useLang } from "../../../../../../contexts";
import { memo } from "react";
export const MediaDisplay = (props: MediaDisplayProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const ImageDisplay = memo(({ path }: { path: string }) => (
    <img className={classes.imageContainer} src={path}></img>
  ));
  const VideoDisplay = memo(({ name }: { name: string }) => (
    <span className={classes.VideoContainer}>
      <Video width={100} height={100} />
      <span className={classes.videoTitle}>{name}</span>
    </span>
  ));
  const DocumentDisplay = memo(({ name }: { name: string }) => (
    <span className={classes.VideoContainer}>
      <DocumentCopy width={100} height={100} />
      <span className={classes.videoTitle}>{name}</span>
    </span>
  ));

  const { data: translation } = useLang();

  return (
    <div className={classes.container}>
      <div className={classes.uploadHeader}>
        <label htmlFor="fileUploader" className={classes.uploadBtn}>
          <AddItem color="white" />
          <span className={classes.uploadBtnLabel}>
            {props.type === "media"
              ? translation.uploadMedia
              : translation.uploadDocs}
          </span>
        </label>
        <input
          accept={
            props.type === "media"
              ? "video/*, image/*"
              : ".doc, .docx, .pdf, .txt"
          }
          id="fileUploader"
          className={classes.inputBtn}
          type="file"
          multiple
          onChange={(e) =>
            props.setFiles(
              Array(e.target.files?.length)
                .fill("")
                .map((_, i) => e.target.files?.[i]!)
            )
          }
        />
        <span
          className={classes.removeItemsBtn}
          onClick={props.handleRemoveAll}
        >
          <CloseBtn width={44} height={44} />
        </span>
      </div>
      <div className={classes.mediaLayout}>
        {props.media.map((item, i) => (
          <span key={item.id} className={classes.mediaContainer}>
            {item.type === "image" && <ImageDisplay path={item.path} />}
            {item.type === "video" && <VideoDisplay name={item.name} />}
            {item.type === "doc" && <DocumentDisplay name={item.name} />}
            <span className={classes.containerOverLay}>
              <span>
                <span
                  className={joinClassNames(
                    classes.deleteBtn,
                    "media-display-container"
                  )}
                  onClick={() => props.handleRemove(i)}
                >
                  <CloseSquare
                    variant="linear" //TODO
                    hover={{
                      variant: "bold",
                      classname: "media-display-container",
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
