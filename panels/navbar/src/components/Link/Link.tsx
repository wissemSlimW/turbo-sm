import { NavigationLink } from "@repo/routes";
import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
import { useStyles } from "./style";
import { LinkProps } from "./type";

export const Link = (props: LinkProps) => {
  const theme = useAppTheme();
  const classes = useStyles({
    theme: { theme, label: props.label, isActive: !!props.isActive },
  });

  return (
    <span className={classes.container}>
      <NavigationLink
        className={joinClassNames(
          classes.link,
          !props.isActive ? classes.linkHover : ""
        )}
        to={`/${props.path}`}
      >
        {props.icon}
      </NavigationLink>
    </span>
  );
};
