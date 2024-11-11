export type ScrollAreaProps = {
  cb: (visible: boolean) => void;
  children: React.ReactElement;
  loadingComponent: React.ReactElement;
  maxhieght?: number | string;
  hideLoadingComponent: boolean;
  hideScroll?: boolean;
};
