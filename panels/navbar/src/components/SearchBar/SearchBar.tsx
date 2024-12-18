import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { SearchBarProps } from "./type";
import { SearchLens } from "@repo/icons/linear";
import { useLang } from "../../contexts";
import { NavigationLink } from "@repo/routes";

export const SeachBar = (props: SearchBarProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <div className={classes.container}>
      <NavigationLink className={classes.logo} to={props.logo.link}>
        {props.logo.icon}
      </NavigationLink>
      <span className={classes.searchInputContainer}>
        <SearchLens height={16} width={16} />
        <input
          placeholder={translation.search}
          className={classes.searchInput}
          value={props.search.value}
          onChange={(e) => props.search.onChange(e.target.value)}
        />
      </span>
    </div>
  );
};
