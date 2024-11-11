export type MenuButtonProps<T> =
    {
        options: { label: string | T; action: () => void }[]
        icon: T
    }
