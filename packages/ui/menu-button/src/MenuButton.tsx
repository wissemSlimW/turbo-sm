import { Grid, IconButton, Menu, MenuItem } from "@mui/material";
import React, { ReactNode } from "react";
import { useStyles } from "./style";
import { MenuButtonProps } from "./type";
import { useAppTheme } from "@repo/styles";

export const MenuButton = <T extends ReactNode>(props: MenuButtonProps<T>) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Grid>
      <IconButton onClick={onClick}>{props.icon}</IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        MenuListProps={{ className: classes.menuStyle }}
        slotProps={{ paper: { className: classes.popper } }}
      >
        {props.options.map((opt, key) => (
          <MenuItem
            onClick={() => {
              opt.action();
              handleClose();
            }}
            key={key}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};
