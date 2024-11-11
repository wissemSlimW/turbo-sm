import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useAppTheme } from '@repo/styles'
import { useStyles } from './style'
import { UploadZoneLayoutProps } from './type'

export const UploadZoneLayout = ({
  acceptableFileTypes = {},
  multiple = true,
  ...props
}: UploadZoneLayoutProps) => {
  const theme = useAppTheme()
  const classes = useStyles({ theme })
  const onDrop = useCallback((acceptedFiles: File[]) => {
    props.setFiles(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
    ...(acceptableFileTypes.length ? { accept: acceptableFileTypes } : {}),
  })

  return (
    <span {...getRootProps({ className: classes.dropZoneContaine })}>
      <input {...getInputProps()} />
      {props.icon}
      <span className={classes.importText}>{props.importText}</span>
      <span className={classes.droptext}>{props.dropText}</span>
    </span>
  )
}
