import { useState } from "react";
import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
import { useStyles } from "./style";
import { DescriptionProps } from "./type";
import { useLang } from "../../../../../../contexts";

export const Description = (props: DescriptionProps) => {
  const [showFullText, setShowFullText] = useState(false);
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <span>
      <article
        className={joinClassNames(
          classes.text,
          !showFullText
            ? props.fullDisplay
              ? classes.longText
              : classes.shortText
            : ""
        )}
      >
        {props.text}
      </article>
      {!showFullText && props.text && (
        <span
          className={classes.viewMore}
          onClick={() => setShowFullText((prev) => !prev)}
        >
          {translation.seeMore}
        </span>
      )}
    </span>
  );
};
