import { CustomDialog } from "@repo/custom-dialog";
import { DeleteDialogProps } from "./type";
export const DeleteDialog = (props: DeleteDialogProps) => {
  return (
    <CustomDialog
      handleClose={props.handleClose}
      handleSubmit={() => {
        props.handleConfirm();
        props.handleClose();
      }}
      variant="delete"
      title={props.title}
      fields={<></>
        // <Typography className={joinClassNames(darkColor, paragraphLargeMedium)}>
        //   {message || "Voulez-vous vraiment supprimer cet élément ?"}
        // </Typography>
      }
    />
  );
};
