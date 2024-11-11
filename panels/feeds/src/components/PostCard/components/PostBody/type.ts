
import { PostCardProps } from '../../type'

export type PostBodyProps = Pick<PostCardProps, 'media'> & {
  handleMediaClick: (_id: string|undefined) => void
  text: string
}
