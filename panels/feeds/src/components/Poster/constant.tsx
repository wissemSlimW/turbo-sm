import {
  PosterAttachSquare,
  // PosterCalendar,
  PosterGallery,
  PosterHashtag,
  PosterMentionSquare,
} from "@repo/icons/featured";
import { MenuItemprops } from "./type";
export const menuBtns: MenuItemprops[] = [
  { icon: <PosterGallery />, label: "imageOrVideo" },
  { icon: <PosterAttachSquare />, label: "attachements" },
  // { icon: <PosterCalendar />, text: 'Évènement marquant' },
  { icon: <PosterMentionSquare />, label: "mention" },
  { icon: <PosterHashtag />, label: "hashtag" },
];
