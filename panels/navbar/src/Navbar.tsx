import { useAppTheme } from "@repo/styles";
import { Link, SeachBar } from "./components";
import { useStyles } from "./style";
import { NavbarProps } from "./type";
import { UserAvatar } from "@repo/user-avatar";
import { Bell, Grid, Messenger } from "@repo/icons/bold";

export const Navbar = (props: NavbarProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <SeachBar logo={props.logo} search={props.search} />
      </div>
      <div className={classes.linksContainer}>
        <div className={classes.links}>
          {props.links.map((link, index) => (
            <Link key={index} {...link} />
          ))}
        </div>
      </div>
      <div className={classes.menu}>
        <span className={classes.menuIconContainer}>
          <Grid height={20} width={20} />
        </span>
        <span className={classes.menuIconContainer}>
          <Messenger height={20} width={20} />
        </span>
        <span className={classes.menuIconContainer}>
          <Bell height={20} width={20} />
        </span>
        <span>
          <UserAvatar size={40} user={props.user} />
        </span>
      </div>
    </div>
  );
};
