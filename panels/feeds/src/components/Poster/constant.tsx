import {
  PosterAttachSquare,
  // PosterCalendar,
  PosterGallery,
  PosterHashtag,
  PosterMentionSquare,
} from '@repo/icons/featured'
import { MenuItemprops } from './type'
export const menuBtns: MenuItemprops[] = [
  { icon: <PosterGallery />, text: 'Image/vidéo' },
  { icon: <PosterAttachSquare />, text: 'Attachement' },
  // { icon: <PosterCalendar />, text: 'Évènement marquant' },
  { icon: <PosterMentionSquare />, text: 'Mention' },
  { icon: <PosterHashtag />, text: 'Hashtag' },
]
