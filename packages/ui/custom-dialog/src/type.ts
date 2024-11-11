export type CustomDialogProps = {
  fields: React.ReactNode;
  deleteAction?: () => void;
  handleClose: () => void;
  title: string;
  isViewMode?: boolean;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  variant?: Variant;
  disableMaxWidth?: boolean;
  disableSubmit?: boolean;
};
export type Variant = "danger" | "delete" | "warning" | "success" | "default";
export type VariantTheme = Record<Variant, string>;
