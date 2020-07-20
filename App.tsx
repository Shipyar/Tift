import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';

import { LoadAssets, theme } from './src/components';
import { AuthenticationNavigator } from './src/Authentication';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {... { fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
