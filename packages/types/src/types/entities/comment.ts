import { ReactionData } from "../common";
import { Model } from "./model";

export interface Comment extends Model {
  text: string;
  relatedTo: string;
  relationType: "comment" | "post";
  deleted?: boolean;
  reactions: ReactionData;
}
