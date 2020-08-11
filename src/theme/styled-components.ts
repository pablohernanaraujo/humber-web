import * as styledComponents from 'styled-components';

import { PaletteType } from './palette';

const {
  default: styled,
  ThemeProvider,
  css,
  ThemeContext,
  ServerStyleSheet,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<{
  Palette: PaletteType;
}>;

export { ServerStyleSheet, ThemeProvider, css, ThemeContext };
export default styled;
