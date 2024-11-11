import { ReactElement } from 'react'

export type UploadZoneLayoutProps = {
  multiple?: boolean
  icon: ReactElement
  importText: string
  dropText: string
  acceptableFileTypes: Record<string, string[]>
  setFiles: (files: File[]) => void
}
