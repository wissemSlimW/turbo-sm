import { PostCardProps } from '../../../../type'
import { PostBodyProps } from '../../type'

export type ContentLayoutProps = Pick<PostCardProps, 'media'> &
  Pick<PostBodyProps, 'handleMediaClick'> & {
}
