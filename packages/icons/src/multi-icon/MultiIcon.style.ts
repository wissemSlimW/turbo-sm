import {  createUseStyles } from 'react-jss'

const states = ['active', 'hover', 'default'] as const
const variants = ['bold', 'linear'] as const

declare global {
  type Entry<T> = { [k in keyof T]: readonly [k, T[k]] }[keyof T]
  interface ObjectConstructor {
    fromEntries<T, _ = {}>(entries: Entry<T>[]): T
  }
}
type ClassNames = `${(typeof variants)[number]}_${(typeof states)[number]}`

const mapStates: Record<Exclude<(typeof states)[number], 'default'>, string> = {
  active: ':active',
  hover: ':hover:not(:active)',
}

const makeState = (
  state: (typeof states)[number],
  variant: (typeof variants)[number],
  container?: string,
): readonly [ClassNames, Record<string, { opacity: 1 }>] =>
  [
    `${variant}_${state}` as const,
    container || state !== 'default'
      ? {
          [`${state !== 'default' ? `.${container}${mapStates[state]} ` : ''}& > $${variant}`]: {
            opacity: 1,
          },
        }
      : {},
  ] as const
const containerClasses = (container: string) => {
  return Object.fromEntries<Record<ClassNames, Record<string, { opacity: 1 }>>>(
    states.flatMap(state => variants.map(variant => makeState(state, variant, container))),
  )
}

export const useStyles = createUseStyles(
  ({ container, size }: { container: string; size: string}) => ({
    bold: {},
    linear: {},
    ...containerClasses(container),
    iconContainer: {
      position: 'relative',
      display: 'flex',
      width: size,
      height: size,
      alignItems: 'center',
      ...Object.fromEntries(
        states
          .filter(() => container)
          .map(state => [
            `.${container}:${state} & > span`,
            {
              opacity: 0,
            },
          ]),
      ),
      '& > span': {
        position: 'absolute',
        display: 'flex',
        width: 'inherit',
        height: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        transition: 'opacity 400ms linear',
      },
    },
  }),
)
