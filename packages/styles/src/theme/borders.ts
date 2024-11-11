export const BOREDERS = {
    XXXLarge: 8,
    XXLarge: 5,
    xLarge: 3,
    large: 2,
    medium: 1.5,
    small: 1,
    XSmall: .5,
} as const
export type Border = typeof BOREDERS
