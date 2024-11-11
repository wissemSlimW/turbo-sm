import { Theme } from "@repo/styles";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme: Theme) => ({
  menuStyle: {
    borderRadius: theme.borderRadiuses.medium,
  },
  popper: {
    "&&&": {
      borderRadius: theme.borderRadiuses.medium,
      boxShadow: "1px 1px 7px #00000025", //TODO}
    },
  },
}));
