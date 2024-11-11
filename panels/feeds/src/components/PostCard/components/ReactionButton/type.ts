import { ReactElement } from 'react'
import { Reaction } from '@repo/types'

export type ReactionButtonProps = {
  renderbutton: ReactElement
  onClick: (reaction: Reaction) => void
}
