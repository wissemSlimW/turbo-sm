import { PostBodyProps } from '../../type'

export type DescriptionProps = Pick<PostBodyProps, 'text'> & {
  fullDisplay: boolean
}
