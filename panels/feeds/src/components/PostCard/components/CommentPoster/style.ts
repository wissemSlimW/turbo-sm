import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    gap: theme.spacings.XSmall,
  },
  inputBlock: {
    flex: 1,
    paddingInline: theme.spacings.large,
    paddingBlock: theme.spacings.small,
    gap: theme.spacings.XSmall,
    display: 'flex',
    borderRadius: theme.borderRadiuses.medium,
    backgroundColor: theme.colors.backgroundBackgroundSecondary,
    border: `${theme.borders.small}px solid ${theme.colors.backgroundOverlay}`,
  },
  inputContainer: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' },
  textInput: {
    outline: 'none',
    flex: 1,
    border: 'none',
    backgroundColor: theme.colors.invisible,
  },
  sendBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    backgroundColor: theme.colors.invisible,
    cursor: 'pointer',
  },
}))
