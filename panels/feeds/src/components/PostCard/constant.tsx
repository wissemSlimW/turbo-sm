import { Clap, Heart, Lamp, Laughing, Like } from "@repo/icons/featured";
import { Reaction } from "@repo/types";
import { ReactElement } from "react";

export const REACTIONS: Record<
  Reaction,
  { label: Reaction; color: string; icon: (size: number) => ReactElement }
> = {
  great: {
    label: "great",
    color: "",
    icon: (size: number) => <Clap width={size} height={size} />,
  },
  heart: {
    label: "heart",
    color: "",
    icon: (size: number) => <Heart width={size} height={size} />,
  },
  lamp: {
    label: "lamp",
    color: "",
    icon: (size: number) => <Lamp width={size} height={size} />,
  },
  smilyFace: {
    label: "smilyFace",
    color: "",
    icon: (size: number) => <Laughing width={size} height={size} />,
  },
  thumbsUp: {
    label: "thumbsUp",
    color: "",
    icon: (size: number) => <Like width={size} height={size} />,
  },
};
export const ORDEREDREACTIOJNS: Reaction[] = [
  "thumbsUp",
  "great",
  "heart",
  "lamp",
  "smilyFace",
];
