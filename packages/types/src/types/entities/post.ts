import { ReactionData } from "../common";
import { Model } from "./model";

export interface Post extends Model {
  description: string;
  deleted?: boolean;
  visibility: "hidden" | "visible";
  reactions: ReactionData;
}
