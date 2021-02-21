// 1. import `extendTheme` function
import { extendTheme, ColorMode } from "@chakra-ui/react"
// 2. Add your color mode config
const config = {
  initialColorMode: "light" as ColorMode,
  useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({ config })
export default theme