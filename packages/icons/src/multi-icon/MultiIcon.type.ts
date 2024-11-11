export type IconVariant = 'bold' | 'linear' 
export type Icons = {
  [Variant in IconVariant]: JSX.Element
}
export type IconAnimatedProps = {
  variant: IconVariant
  hover?: {
    variant: IconVariant
    classname: string
  }
  size?: string
  active?: {
    variant: IconVariant
    classname: string
  }
  color?: string
}
export interface MultiIconProps extends IconAnimatedProps {
  icons: Icons
}
