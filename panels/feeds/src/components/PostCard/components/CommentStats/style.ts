import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacings.small,
    paddingInline: theme.spacings.large,
  },
  label: {
    cursor: 'pointer',
    fontFamily: theme.fontFamily,
    color: theme.colors.gray,
    ...theme.typography.paragraph.small.regular,
  },
  reactionStats: {
    cursor: 'pointer',
    display: 'flex',
    gap: 5,
    alignItems: 'center',
  },
  reactionContainer: { display: 'flex', alignItems: 'center' },
  reactioncontainer: {
    display: 'flex',
    gap: theme.spacings.XSmall,
    alignItems: 'center',
  },
}))
