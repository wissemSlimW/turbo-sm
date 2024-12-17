import { useAppTheme } from "@repo/styles";
import { SearchBarProps } from "./type";
import { useStyles } from "./style";
import { useLang } from "../../contexts";

export const SearchBar = (props: SearchBarProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
  return (
    <div className={classes.container}>
      <span className={classes.label}>{translation.contact}</span>
      <input
        className={classes.input}
        value={props.value}
        placeholder={translation.search}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};
