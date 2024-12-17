import { CustomDialog } from "@repo/custom-dialog";
import { DeleteDialogProps } from "./type";
import { useStyles } from "./style";
import { useAppTheme } from "@repo/styles";
import { LANG, useLang } from "./contexts";
import { LangProvider } from "@repo/translation";

const DeleteDialogBody = (props: DeleteDialogProps) => {
  const theme = useAppTheme();
  const classes = useStyles({ theme });
  const { data: translation } = useLang();
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
          {props.message || translation.deleteMessage}
        </span>
      }
    />
  );
};
export const DeleteDialog = (props: DeleteDialogProps) => {
  return (
    <LangProvider data={LANG}>
      <DeleteDialogBody {...props} />
    </LangProvider>
  );
};
