import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacings.small
  },
  docContainer: {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'flex',
    gap: theme.spacings.small,
    borderRadius: theme.borderRadiuses.medium,
    padding: theme.spacings.large,
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
  },
  detailsSection: { display: 'flex', flexDirection: 'column' },
  title: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    color: theme.colors.dark,
    ...theme.typography.paragraph.medium.medium,
  },
  subTitle: { color: theme.colors.gray, ...theme.typography.paragraph.small.regular },
}))
