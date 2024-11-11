import { PosterDocument } from '@repo/icons/featured'
import { useAppTheme } from '@repo/styles'
import { useStyles } from './style'
import { DocumentLayoutProps } from './type'

export const DocumentLayout = (props: DocumentLayoutProps) => {
  const theme = useAppTheme()
  const classes = useStyles({ theme })
  const getFileSize = (size: number) => {
    if (size < 1024) return `${size.toFixed(2)} Byte`
    else if (size / 1024 < 1024) return `${(size / 1024).toFixed(2)} Kb`
    else if (size / (1024 * 1024) < 1024) return `${(size / (1024 * 1024)).toFixed(2)} Mo`
    else if (size / (1024 * 1024 * 1024) < 1024)
      return `${(size / (1024 * 1024 * 1024)).toFixed(2)} Go`
  } // TODO
  return (
    <span className={classes.container}>
      {props.documents.map(doc => (
        <a key={doc._id} className={classes.docContainer} download href={doc.path}>
          <PosterDocument />
          <span className={classes.detailsSection}>
            <span className={classes.title}>{doc.name}</span>
            <span className={classes.subTitle}>{getFileSize(doc.size)}</span>
          </span>
        </a>
      ))}
    </span>
  )
}
