import { useMemo } from 'react'
import { useStyles } from './MultiIcon.style'
import { MultiIconProps } from './MultiIcon.type'

export const MultiIcon = (props: MultiIconProps) => {
  const {
    size = '24px',
    variant,
    hover,
    active,
    icons: { bold, linear },
  } = props

  const container = useMemo(() => hover?.classname ?? active?.classname ?? '', [hover, active])
  const classes = useStyles({ theme: { container, size } })
  const _hover = useMemo(
    () => hover || { classname: active?.classname, variant: variant },
    [hover, active, variant],
  )
  const _active = useMemo(() => active || hover, [active, hover])
  return (
    <span
      className={` ${classes.iconContainer}
        ${_active ? classes[`${_active.variant}_active`] : ''}
        ${_hover ? classes[`${_hover.variant}_hover`] : ''}
        ${classes[`${variant}_default`]}`}>
      <span className={classes.bold}>{bold}</span>
      <span className={classes.linear}>{linear}</span>
    </span>
  )
}
