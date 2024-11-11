import { useMemo } from 'react'
import { ContentLayout, Description, DocumentLayout } from './components'
import { PostBodyProps } from './type'
import { PostCardProps } from '../../type'

export const PostBody = (props: PostBodyProps) => {
  const { documents, media } = useMemo(() => {
    const media: PostCardProps['media'] = []
    const documents: PostCardProps['media'] = []
    props.media.forEach(item => {
      if (item.isImage) media.push(item)
      else if (item.isVideo) media.push(item)
      else documents.push(item)
    })
    return { media, documents }
  }, [props.media])
  return (
    <>
      <Description text={props.text} fullDisplay={!props.media.length} />
      {media.length ? <ContentLayout media={media} handleMediaClick={props.handleMediaClick} /> : []}
      {documents.length ? <DocumentLayout documents={documents} /> : []}
    </>
  )
}
