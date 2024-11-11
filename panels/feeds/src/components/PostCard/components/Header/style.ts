import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  infoBlock: {
    display: 'flex',
    gap: theme.spacings.small,
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: theme.colors.dark,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.small.regular,
  },
  subtitle: {
    color: theme.colors.gray,
    fontFamily: theme.fontFamily,
    ...theme.typography.paragraph.xSmall.regular,
  },
  menuLabelContainer: {
    display: 'flex',
    gap: theme.spacings.small,
    alignItems: 'center',
    cursor: 'pointer',
  },
}))
