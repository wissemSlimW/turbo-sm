import { MultiIcon } from '../multi-icon'
import { IconVariant, Icons } from '../multi-icon/MultiIcon.type'

export const makeMultIcon =
  (icons: Icons) =>
  ({
    variant = 'linear',
    hover,
    size,
    active,
  }: {
    variant?: IconVariant
    className?: string
    hover?: {
      variant: IconVariant
      classname: string
    }
    size?: string
    active?: {
      variant: IconVariant
      classname: string
    }
   
  }) =>
    MultiIcon({
      icons,
      variant,
      hover,
      size,
      active,
    })
