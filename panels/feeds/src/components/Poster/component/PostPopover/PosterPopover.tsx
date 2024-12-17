import { Dialog } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import {
  UploadZoneLayout,
  UploadZoneLayoutProps,
} from "@repo/upload-zone-layout";
import { CloseSquare } from "@repo/icons/animated";
import { Document, GalleryAdd } from "@repo/icons/bold";
import { useAppTheme } from "@repo/styles";
import { UserAvatar } from "@repo/user-avatar";
import { menuBtns } from "../../constant";
import { MenuItemprops } from "../../type";
import { MediaDisplay } from "./component";
import { TextLayout } from "./component/TextLayout";
import { useStyles } from "./style";
import { PostDataType, PosterPopoverProps } from "./type";
import { useLang } from "../../../../contexts";

export const PosterPopover = (props: PosterPopoverProps) => {
  const [publishDisabled, setPublishDisabled] = useState(false);
  const [data, setData] = useState<PostDataType>(
    props.data || { files: [], hashtags: [], text: "" }
  );
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  const dropZoneProps: Record<
    "documents" | "media",
    Pick<
      UploadZoneLayoutProps,
      "icon" | "dropText" | "importText" | "acceptableFileTypes"
    >
  > = useMemo(
    () => ({
      media: {
        icon: <GalleryAdd />,
        dropText: translation.dropText,
        importText: translation.mediaImportText,
        acceptableFileTypes: {
          "image/*": [
            ".jpeg",
            ".png",
            ".webp",
            ".mp4",
            ".mpeg",
            ".ogg",
            ".webm",
          ],
        },
      },
      documents: {
        icon: <Document />,
        dropText: translation.dropText,
        importText: translation.documentImportText,
        acceptableFileTypes: {
          "application/doc": [".doc", ".docx", ".pdf", ".txt"],
        },
      },
    }),
    [translation]
  );

  const actions: { onClick: () => void }[] = useMemo(
    () => [
      {
        onClick: () => {
          !data.files.length && props.setType("media");
        },
      }, // Image/vidéo
      {
        onClick: () => {
          !data.files.length && props.setType("documents");
        },
      }, // Attachement
      { onClick: () => {} }, // Event // TODO
      { onClick: () => {} }, // Mention // TODO
      { onClick: () => {} }, // Hashtag // TODO
    ],
    [data.files.length, props.setType]
  );
  const menu: (MenuItemprops & { onClick?: () => void })[] = useMemo(
    () =>
      menuBtns.map((btn, i) => ({
        ...btn,
        ...actions[i],
      })),
    [menuBtns, actions]
  );
  const handlePublish = useCallback(() => {
    if (!data.files.length && !data.text.trim() && !data.hashtags.length)
      return;
    const removedFiles: string[] =
      props.data?.files
        .filter((f) => data.files.every((file) => file.id !== f.id))
        .map((f) => f.id) || [];
    const newFiles: File[] = data.files
      .filter((f) => !!f.file)
      .map((f) => f.file!);
    setPublishDisabled(true);
    props.publishAction({
      hashtags: data.hashtags,
      removedFiles,
      newFiles,
      text: data.text,
      cb: () => {
        props.handleClose();
        setData({ files: [], hashtags: [], text: "" });
        setPublishDisabled(false);
      },
    });
  }, [
    data.files,
    data.text,
    data.hashtags,
    props.publishAction,
    props.handleClose,
    setData,
    setPublishDisabled,
  ]);
  const handleRemoveElement = useCallback(
    (prevdata: PostDataType, i: number) => {
      const _data = [...prevdata.files];
      _data.splice(i, 1);
      return { ...prevdata, files: _data };
    },
    []
  );
  const createRandomId = useCallback(
    () =>
      Math.floor(
        Math.random() * 1000000 * Math.random() * Date.now()
      ).toString(),
    []
  );
  const getFileType = useCallback((file: File) => {
    if (file.type.startsWith("image")) return "image";
    else if (file.type.startsWith("video")) return "video";
    else return "doc";
  }, []);
  const handleSetFiles = useCallback(
    (files: File[]) => {
      const _files: PostDataType["files"] = files.map((f) => ({
        id: createRandomId(),
        name: f.name,
        path: URL.createObjectURL(f),
        file: f,
        type: getFileType(f),
      }));
      setData((prev) => ({ ...prev, files: [...prev.files, ..._files] }));
    },
    [createRandomId, getFileType, setData]
  );

  return (
    <Dialog
      maxWidth={false}
      open
      onClose={props.handleClose}
      PaperProps={{ className: classes.paper }}
    >
      <div className={classes.container}>
        <div className={classes.header}>
          <UserAvatar user={props.user} size={32} />
          <span className={classes.infoBlock}>
            <span className={classes.title}>
              {` ${props.user?.firstName} ${props.user?.lastName}`}
            </span>
            <span className={classes.subtitle}>{"---"}</span>
          </span>
          <span
            className={`${classes.closeBtnContainer} close-dialog`}
            onClick={props.handleClose}
          >
            <CloseSquare
              variant="linear"
              hover={{ variant: "bold", classname: "close-dialog" }}
            />
          </span>
        </div>
        <div className={classes.body}>
          {
            <TextLayout
              {...{
                data,
                setData,
                direction: props.type === "text" ? "vertical" : "horizontal",
              }}
            />
          }
          {data.files.length ? (
            <MediaDisplay
              type={props.type}
              handleRemoveAll={() =>
                setData((prev) => ({ ...prev, files: [] }))
              }
              handleRemove={(i) =>
                setData((prev) => handleRemoveElement(prev, i))
              }
              setFiles={handleSetFiles}
              media={data.files.map((f) => ({
                path: f.path,
                name: f.name,
                type: f.type,
                id: f.id,
              }))}
            />
          ) : (
            <>
              {(props.type === "documents" || props.type === "media") && (
                <UploadZoneLayout
                  {...dropZoneProps[props.type]}
                  setFiles={handleSetFiles}
                />
              )}
            </>
          )}
          <div className={classes.menu}>
            <span className={classes.menuLabel}>
              {translation.addToYourPost}
            </span>
            {menu.map((item, key) => (
              <span key={key} className={classes.btn} onClick={item.onClick}>
                <span>{item.icon}</span>
                <span>{translation[item.label]}</span>
              </span>
            ))}
          </div>
        </div>
        <button
          disabled={publishDisabled}
          className={classes.publishBtn}
          onClick={handlePublish}
        >
          {translation.publish}
        </button>
      </div>
    </Dialog>
  );
};
