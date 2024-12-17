import { Dialog } from "@mui/material";
import { CloseSquare } from "@repo/icons/animated";
import { Trash } from "@repo/icons/linear";
import { useAppTheme } from "@repo/styles";
import { joinClassNames } from "@repo/utils";
import { useStyles } from "./style";
import { CustomDialogProps } from "./type";
import { VARIANTS } from "./variants.cnst";
import { LANG, useLang } from "./contexts";
import { LangProvider } from "@repo/translation";

const DialogBody = ({
  handleClose,
  handleSubmit,
  title,
  deleteAction,
  fields,
  isViewMode,
  variant = "default",
  disableMaxWidth,
  disableSubmit,
}: CustomDialogProps) => {
  const theme = useAppTheme();
  const classes = useStyles({
    theme: { theme, variantColor: VARIANTS[variant] },
  });
  const { data: translation } = useLang();
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth
      slotProps={{ backdrop: { className: classes.dialogBackDrop } }}
      PaperProps={{
        className: joinClassNames(
          classes.dialogBlock,
          disableMaxWidth && classes.dialogBlockNoMaxWidth
        ),
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit?.(e);
        }}
        className={classes.dialogContainer}
      >
        <div className={joinClassNames(classes.headerBlock)}>
          <span className={classes.title}>{title}</span>
          <div className={classes.closeBtnContainer}>
            <span
              onClick={handleClose}
              className={joinClassNames(classes.closeBtn, "close-dialog")}
            >
              <CloseSquare
                variant="linear"
                hover={{ classname: "close-dialog", variant: "bold" }}
                className={classes.closeIcon}
              />
            </span>
          </div>
        </div>
        <div
          className={joinClassNames(
            classes.contentBlock
            // classes.customScroll
          )}
        >
          {fields}
        </div>
        {!isViewMode && (
          <div className={classes.footerBlock}>
            <div>
              {deleteAction && (
                <span onClick={deleteAction} className={classes.deleteBtn}>
                  <Trash className={classes.deleteBtnIcon} />
                </span>
              )}
            </div>
            <div className={classes.controlBlock}>
              <button
                className={joinClassNames(classes.button, classes.cancelBtn)}
                onClick={handleClose}
              >
                {translation.cancel}
              </button>
              <button
                disabled={disableSubmit}
                className={joinClassNames(classes.button, classes.submitBtn)}
                type="submit"
              >
                {translation.confirm}
              </button>
            </div>
          </div>
        )}
      </form>
    </Dialog>
  );
};

export const CustomDialog = (props: CustomDialogProps) => {
  return (
    <LangProvider data={LANG}>
      <DialogBody {...props} />
    </LangProvider>
  );
};
