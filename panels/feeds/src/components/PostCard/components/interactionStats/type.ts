import { ReactElement } from 'react'

export type InteractionStatsProps = {
  totalReactionsCount: number
  totalCommentsCount: number
  totalViewsCount: number
  onReactionsClick: () => void
  onCommentsClick: () => void
  onViewsClick: () => void
  reactionIcons: ReactElement[]
 
}
