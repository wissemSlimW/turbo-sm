import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  inputContainer: {
    flex: 1,
    fontFamily:theme.fontFamily,
    display: 'flex',
    paddingInline: theme.spacings.large,
    paddingBlock: theme.spacings.small,
    gap: theme.spacings.small,
  },
  textarea: {
    fontFamily:theme.fontFamily,
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    resize: 'none',
  },
  rowContainer: { flexDirection: 'row' },
  colContainer: {
    border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
    borderRadius: theme.borderRadiuses.medium,
    flexDirection: 'column',
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
  },
}))
