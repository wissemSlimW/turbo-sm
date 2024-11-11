import { Model } from "./model";

export interface Media extends Model {
  name: string;
  size: number;
  path: string;
  isVideo: boolean;
  isAudio: boolean;
  isImage: boolean;
  isText: boolean;
  isJSON: boolean;
  isPDF: boolean;
  meta: {
    userId?: string;
    postId?: string;
  };
}
