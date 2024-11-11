import { useInView } from "react-intersection-observer";
import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { ScrollAreaProps } from "./type";
import { joinClassNames } from "@repo/utils";

export const ScrollArea = ({
  maxhieght = "100%",
  hideScroll = false,
  ...props
}: ScrollAreaProps) => {
  const theme = useAppTheme();

  const classes = useStyles({ theme });
  const { ref } = useInView({
    onChange: (visible) => props.cb(visible),
  });
  return (
    <div
      className={joinClassNames(
        classes.container,
        hideScroll ? classes.hideScroll : ""
      )}
      style={{ maxHeight: maxhieght }}
    >
      {props.children}
      {!props.hideLoadingComponent && (
        <span ref={ref}>{props.loadingComponent}</span>
      )}
    </div>
  );
};
