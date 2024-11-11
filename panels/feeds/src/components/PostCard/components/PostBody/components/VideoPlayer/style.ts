import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  videoPlayerContainer: {
    width: theme.spacings.full,
    height: theme.spacings.full,
    '&&>div': {
      width: '100% !important',
      height: '100% !important',
    },
  },
  fullscreen: {
    '&>div>video': {
      objectFit: 'cover',
    },
  },
}))
