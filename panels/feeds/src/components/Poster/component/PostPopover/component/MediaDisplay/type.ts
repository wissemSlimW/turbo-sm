
import { FileObj, PosterPopoverProps } from '../../type'

export type MediaDisplayProps = Pick<PosterPopoverProps, 'type'> & {
  media: FileObj[]
  setFiles: (files: File[]) => void
  handleRemoveAll: () => void
  handleRemove: (index: number) => void
}
