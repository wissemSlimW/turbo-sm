import { Reaction, ReactionData } from "@repo/types";

export const getGroupedReaction = (props: {
  reactions: ReactionData;
  reactioncCuntOnDisplay?: number;
}): [Reaction, number][] => {
  const reactionsList = Object.entries(
    Object.keys(props.reactions).reduce(
      (prev: Partial<Record<Reaction, number>>, curr: string) => ({
        ...prev,
        [props.reactions[curr]!]: (prev?.[props.reactions[curr]!] || 0) + 1,
      }),
      {}
    )
  ) as [Reaction, number][];
  return reactionsList
    .sort((a, b) => b[1] - a[1])
    .slice(0, props.reactioncCuntOnDisplay!  || reactionsList.length);
};
