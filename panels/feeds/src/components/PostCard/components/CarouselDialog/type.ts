
import { PostCardProps } from '../../type'
export type CarouselDialogProps = Pick<PostCardProps, 'media'> & {
  selected: number
  handleClose: () => void
}
