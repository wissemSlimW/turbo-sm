export type DeleteDialogProps = {
    title: string;
    message?: string;
    handleClose: () => void;
    handleConfirm: () => void;
}