import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';

import { ThemeProvider } from '../theme/styled-components';
import { Palette } from '../theme/palette';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <ThemeProvider
      theme={{
        Palette,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
