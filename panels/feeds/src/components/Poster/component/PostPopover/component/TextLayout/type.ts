
import { PostDataType } from '../../type'

export type TextLayoutProps = {
  data: PostDataType
  setData: React.Dispatch<React.SetStateAction<PostDataType>>
  direction?:'vertical'|'horizontal'
}
