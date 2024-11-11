import { Menu } from '@mui/material'
import { useState } from 'react'
import { PosterEmojiFace } from '@repo/icons/featured'
import { EmojiPickerButtonProps } from './type'
import { useStyles } from './style'
import EmojiPicker from 'emoji-picker-react'
import { useAppTheme } from '@repo/styles'

export const EmojiPickerButton = (props: EmojiPickerButtonProps) => {
  const theme = useAppTheme()
  const classes = useStyles({ theme })
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <span className={classes.btn} onClick={event => setAnchorEl(event.currentTarget)}>
        <PosterEmojiFace />
      </span>
      <Menu
        slotProps={{ paper: { className: classes.paper } }}
        MenuListProps={{ className: classes.menuList }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}>
        <EmojiPicker skinTonesDisabled onEmojiClick={emojiData => props.setText(emojiData.emoji)} />
      </Menu>
    </>
  )
}
