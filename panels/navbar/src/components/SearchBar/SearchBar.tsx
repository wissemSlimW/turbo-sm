import { useAppTheme } from "@repo/styles";
import { useStyles } from "./style";
import { SearchBarProps } from "./type";
import { SearchLens } from "@repo/icons/linear";
import { useLang } from "../../contexts";

export const SeachBar = (props: SearchBarProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <div className={classes.container}>
      <a className={classes.logo} href={props.logo.link}>
        {props.logo.icon}
      </a>
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
