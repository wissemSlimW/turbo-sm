import { ReactElement } from 'react'
import { Reaction } from '@repo/types'
import { DICTIONARY } from './dict'
import { Clap, Heart, Lamp, Laughing, Like } from '@repo/icons/featured'

export const REACTIONS: Record<
  Reaction,
  { label: string; color: string; icon: (size: number) => ReactElement }
> = {
  great: {
    label: DICTIONARY.great,
    color: '',
    icon: (size: number) => <Clap width={size} height={size} />,
  },
  heart: {
    label: DICTIONARY.heart,
    color: '',
    icon: (size: number) => <Heart width={size} height={size} />,
  },
  lamp: {
    label: DICTIONARY.lamp,
    color: '',
    icon: (size: number) => <Lamp width={size} height={size} />,
  },
  smilyFace: {
    label: DICTIONARY.smilyFace,
    color: '',
    icon: (size: number) => <Laughing width={size} height={size} />,
  },
  thumbsUp: {
    label: DICTIONARY.thumbsUp,
    color: '',
    icon: (size: number) => <Like width={size} height={size} />,
  },
}
export const ORDEREDREACTIOJNS: Reaction[] = ['thumbsUp', 'great', 'heart', 'lamp', 'smilyFace']
