
type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type fontStyle = {
    fontSize: number
    fontWeight: `${d}00`
}
type textStyle = Partial<Record<'regular' | 'medium' | 'semiBold' | 'bold', fontStyle>>
type paragraphStyle = Readonly<Record<'xSmall' | 'medium' | 'small' | 'large' | 'xxSmall', textStyle>>
type Types = 'paragraph'
export type Typography =
    Record<Types, paragraphStyle>

export const TYPOGRAPHY: Typography = {
    paragraph: {
        small: {
            regular: {
                fontSize: 14,
                fontWeight: '400',
            },
            medium: {
                fontSize: 14,
                fontWeight: '500',
            },
            semiBold: {
                fontSize: 14,
                fontWeight: '600',
            },
        },
        medium: {
            semiBold: {
                fontWeight: '600',
                fontSize: 16,
            },
            medium: {
                fontWeight: '500',
                fontSize: 16,
            },
            regular: {
                fontWeight: '400',
                fontSize: 16,
            },
        },
        xSmall: {
            regular: {
                fontWeight: '400',
                fontSize: 12,
            },
            medium: {
                fontWeight: '500',
                fontSize: 12,
            },
            semiBold: {
                fontWeight: '600',
                fontSize: 12,
            },
            bold: {
                fontWeight: '700',
                fontSize: 12,
            },
        },
        xxSmall: {
            regular: {
                fontWeight: '400',
                fontSize: 10,
            },
            medium: {
                fontWeight: '500',
                fontSize: 10,
            },
            semiBold: {
                fontWeight: '600',
                fontSize: 10,
            },
            bold: {
                fontWeight: '700',
                fontSize: 10,
            },
        },
        large: {
            medium: {
                fontWeight: '500',
                fontSize: 18,
            },
            regular: {
                fontWeight: '400',
                fontSize: 18,
            },
            semiBold: {
                fontWeight: '600',
                fontSize: 18,
            },
            bold: {
                fontWeight: '700',
                fontSize: 12,
            },
        },
    },
   
}
