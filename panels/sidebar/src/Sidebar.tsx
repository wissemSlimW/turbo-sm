import { NavigationLink } from "@repo/routes";
import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { SidebarProps } from "./type";

export const Sidebar = (props: SidebarProps) => {
  const theme = useAppTheme();
  const Classes = useStyles({ theme });
  return (
    <div className={Classes.container}>
      {props.menu.map((subMenu, i) => (
        <div key={i} className={Classes.subMenu}>
          <span className={Classes.title}>{subMenu.title}</span>
          {subMenu.menu.map((item, index) => (
            <NavigationLink key={index} className={Classes.link} to={item.link}>
              <span className={Classes.icon}> {item.icon}</span>
              <span className={Classes.label}>{item.label}</span>
            </NavigationLink>
          ))}
        </div>
      ))}
    </div>
  );
};
