import { EmojiPickerButton } from "@repo/emoji-picker-button";
import { useStyles } from "./style";
import { TextLayoutProps } from "./type";
import { joinClassNames } from "@repo/utils";
import { useAppTheme } from "@repo/styles";
import { useLang } from "../../../../../../contexts";

export const TextLayout = ({
  direction = "vertical",
  ...props
}: TextLayoutProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();

  return (
    <div
      className={joinClassNames(
        classes.inputContainer,
        direction === "horizontal" ? classes.rowContainer : classes.colContainer
      )}
    >
      <textarea
        className={classes.textarea}
        placeholder={translation.postTextInputPlaceholder}
        value={props.data.text}
        onChange={(e) => props.setData({ ...props.data, text: e.target.value })}
      />
      <EmojiPickerButton
        setText={(t) => {
          props.setData((prev) => ({ ...prev, text: prev.text + t }));
        }}
      />
    </div>
  );
};
