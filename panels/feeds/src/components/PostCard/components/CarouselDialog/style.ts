import { Theme } from '@repo/styles'
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles((theme: Theme) => ({
  container: { display: 'flex', width: theme.spacings.full },
  paper: {
    backgroundColor: theme.colors.invisible,
    borderRadius: theme.borderRadiuses.medium,
    padding: theme.spacings.large
  },
  carousel: {
    width: theme.spacings.full,
    '&>:nth-child(2)>div': {
      margin: theme.spacings.none,
      '&>ul>li': {
        aspectRatio: 1,
        border: 'none',
        position: 'relative',
        borderRadius: theme.borderRadiuses.XMedium,
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundColor: '#afabab91',//TODO
        },
      },
    },
    '&>:nth-child(2)>div>ul> .selected': {
      border: `${theme.borders.large}px solid ${theme.colors.background}`,
      '&:before': {
        backgroundColor: theme.colors.invisible,
      },
    },
  },
  carouselImageItem: {
    borderRadius: theme.borderRadiuses.medium,
    width: theme.spacings.full,
    aspectRatio: 1,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  carouselVideoItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.80)',//TODO
    width: theme.spacings.full,
    height: theme.spacings.full,
    '&>div': { backgroundColor: 'rgba(255, 255, 255, 0.57)' },//TODO
  },
  thumbContainer: {
    borderRadius: theme.borderRadiuses.medium,
  },
  arrowBtn: {
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 10,
    insetBlockStart: 'calc(50% - 40px)',
    color: "white"//TODO
  },
  next: { insetInlineEnd: theme.spacings.small },
  previous: { insetInlineStart: theme.spacings.small },
  carouselVideoThumbnail: {
    width: theme.spacings.full,
    height: theme.spacings.full,
    borderRadius: theme.borderRadiuses.medium,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c7c7c773',//TODO
  },
}))
