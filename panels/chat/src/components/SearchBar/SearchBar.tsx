import { useAppTheme } from "@repo/styles";
import { SearchBarProps } from "./type";
import { useStyles } from "./style";
import { DICTIONARY } from "./dict";

export const SearchBar = (props: SearchBarProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <span className={classes.label}>{DICTIONARY.contact}</span>
      <input
        className={classes.input}
        value={props.value}
        placeholder={DICTIONARY.search}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};
