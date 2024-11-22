import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { LinkProps } from "./type";
import { joinClassNames } from "@repo/utils";

export const Link = (props: LinkProps) => {
  const theme = useAppTheme();
  const classes = useStyles({
    theme: { theme, label: props.label, isActive: !!props.isActive },
  });

  return (
    <span className={classes.container}>
      <a
        className={joinClassNames(
          classes.link,
          !props.isActive ? classes.linkHover : ""
        )}
        href={`/${props.path}`}
      >
        {props.icon}
      </a>
    </span>
  );
};
