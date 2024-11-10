import React from 'react';
import {TamaguiProvider, createTamagui} from '@tamagui/core';

import { config } from '@tamagui/config/v3';

import Navigator from './src/navigator/Navigator';

// Create tamagui instance from config
const tamaguiConfig = createTamagui(config);

const App = (): React.JSX.Element => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Navigator />
    </TamaguiProvider>
  );
};

export default App;
