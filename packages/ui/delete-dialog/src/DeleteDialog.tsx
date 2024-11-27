import { CustomDialog } from "@repo/custom-dialog";
import { DeleteDialogProps } from "./type";
import { useStyles } from "./style";
import { useAppTheme } from "@repo/styles";
import { DICTIONARY } from "./dict";
export const DeleteDialog = (props: DeleteDialogProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  return (
    <CustomDialog
      handleClose={props.handleClose}
      handleSubmit={() => {
        props.handleConfirm();
        props.handleClose();
      }}
      variant="delete"
      title={props.title}
      fields={
        <span className={classes.message}>
          {props.message || DICTIONARY.message}
        </span>
      }
    />
  );
};
