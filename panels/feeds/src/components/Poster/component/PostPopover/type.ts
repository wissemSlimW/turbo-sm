import { UserAvatarProps } from '@repo/user-avatar'

export type InputLayoutTypes = 'text' | 'media' | 'documents'
export type PosterPopoverProps =  {
  user: UserAvatarProps['user']
  type: InputLayoutTypes
  setType: (type: InputLayoutTypes) => void
  handleClose: () => void
  data?: PostDataType
  publishAction: (props: {
    hashtags: string[]
    removedFiles: string[]
    newFiles: File[]
    text: string
    cb: () => void
  }) => void
}
export type FileObj = {
  file?: File
  id: string
  name: string
  path: string
  type: 'image' | 'video' | 'doc'
}
export type PostDataType = { text: string; files: FileObj[]; hashtags: string[] }
