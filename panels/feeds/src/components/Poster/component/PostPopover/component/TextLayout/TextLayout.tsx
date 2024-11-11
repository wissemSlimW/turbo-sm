import { EmojiPickerButton } from "@repo/emoji-picker-button";
import { DICTIONARY } from "./dict";
import { useStyles } from "./style";
import { TextLayoutProps } from "./type";
import { joinClassNames } from "@repo/utils";
import { useAppTheme } from "@repo/styles";

export const TextLayout = ({
  direction = "vertical",
  ...props
}: TextLayoutProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });

  return (
    <div
      className={joinClassNames(
        classes.inputContainer,
        direction === "horizontal" ? classes.rowContainer : classes.colContainer
      )}
    >
      <textarea
        className={classes.textarea}
        placeholder={DICTIONARY.commentPlaceholder}
        value={props.data.text}
        onChange={(e) => props.setData({ ...props.data, text: e.target.value })}
      />
      <EmojiPickerButton
        setText={(t) => {
          console.log({ t });
          props.setData((prev) => ({ ...prev, text: prev.text + t }));
        }}
      />
    </div>
  );
};
