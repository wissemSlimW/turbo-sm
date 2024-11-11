import { useTheme } from "react-jss"
import { Theme } from "./type"

export const useAppTheme = () => useTheme<Theme>()
