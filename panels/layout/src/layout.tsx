import { useStyle } from "./style";
import { LayoutProps } from "./type";

export const Layout = (props: LayoutProps) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <header className={classes.header}>{props.header}</header>
      <div className={classes.bodyContainer}>
        <div className={classes.backgroundLayer}>
          <div className={classes.startSideBar}>{props.startSideBar}</div>
          <div className={classes.body}>{props.body}</div>
          <div className={classes.endSideBar}>{props.endSideBar}</div>
        </div>
        <div className={classes.midLayer}>{props.midLayer}</div>
      </div>
    </div>
  );
};
