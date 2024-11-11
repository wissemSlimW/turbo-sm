export const BORDER_RADIUSES = {
    xLarge: 20,
    large: 15,
    XMedium: 13,
    medium: 10,
    small: 8,
    XSmall: 5,
    rounded: '50%'
} as const
export type BorderRadius = typeof BORDER_RADIUSES