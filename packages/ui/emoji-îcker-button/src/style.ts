import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  btn: { cursor: 'pointer' },
  paper: { borderRadius: theme.borderRadiuses.medium },
  menuList: { paddingBlock: theme.spacings.none },
}))
