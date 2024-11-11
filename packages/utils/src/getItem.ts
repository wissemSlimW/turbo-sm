type FlattenKeys<T> = T extends string | number | boolean
  ? never
  : T extends (infer U)[]
    ? `${number}.${FlattenKeys<U>}` | `${number}`
    : {
        [K in keyof T]: K extends string | number
          ? `${K}${T[K] extends object ? `.${FlattenKeys<T[K]>}` : ''}` | `${K}`
          : never
      }[keyof T]
/**
 *
 * @param list array of items
 * @param field the searchable field name path
 * @param value value of the item searched
 *
 * @returns the result item or undefined
 */
export const getItem = <T extends Record<string, any>>({
  list,
  field,
  value,
}: {
  list: T[]
  field: FlattenKeys<T>
  value: any
}): T | undefined =>
  list.find(u => field.split('.').reduce((prev, curr) => prev[curr], u) === value)
