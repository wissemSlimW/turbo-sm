import { FormEvent, useState } from "react";
import { UserAvatar } from "@repo/user-avatar";
import { Send1 } from "@repo/icons/bold";
import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { CommentPosterProps } from "./type";
import { useLang } from "../../../../contexts";

export const CommentPoster = (props: CommentPosterProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      props.addComment(text, () => setText(""));
    }
  };
  return (
    <div className={classes.container}>
      <span>
        <UserAvatar user={props.commentWriter} />
      </span>
      <form className={classes.inputBlock} onSubmit={handleSubmit}>
        {
          <span className={classes.inputContainer}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={classes.textInput}
              placeholder={translation.commentInputPlaceholder}
            />
            <button className={classes.sendBtn} type="submit">
              <Send1 />
            </button>
          </span>
        }
      </form>
    </div>
  );
};
