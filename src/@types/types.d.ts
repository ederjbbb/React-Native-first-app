import 'styled-components'
import theme from '../themes/defaultTheme'


declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType{}
}
