import { Menu, Tooltip } from "@mui/material";
import { useState } from "react";
import { useAppTheme } from "@repo/styles";
import { ORDEREDREACTIOJNS, REACTIONS } from "../../constant";
import { useStyles } from "./style";
import { ReactionButtonProps } from "./type";

export const ReactionButton = (props: ReactionButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <span>
      <span onClick={(event) => setAnchorEl(event.currentTarget)}>
        {props.renderbutton}
      </span>
      <Menu
        PopoverClasses={{ paper: classes.paper }}
        MenuListProps={{ className: classes.menuList }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: "left", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
      >
        <li onClick={handleMenuClose} className={classes.menuItem}>
          {ORDEREDREACTIOJNS.map((key) => (
            <Tooltip key={key} title={REACTIONS[key].label} placement="top">
              <span
                onClick={() => props.onClick(key)}
                className={classes.reactionContainer}
              >
                {REACTIONS[key].icon(34)}
              </span>
            </Tooltip>
          ))}
        </li>
      </Menu>
    </span>
  );
};
