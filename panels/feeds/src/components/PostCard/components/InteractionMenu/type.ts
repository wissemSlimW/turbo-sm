
import { Reaction } from '@repo/types'

export type InteractionMenuProps = {
  onReactionClick: (reactionType: Reaction) => void
  onCommentClick: () => void
  onMessageClick: () => void
  userPostReaction: Reaction | undefined
}
