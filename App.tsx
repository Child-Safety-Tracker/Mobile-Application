import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { TamaguiProvider, createTamagui, styled } from '@tamagui/core';
import config from '@tamagui/config/v3'
import { Button } from '@tamagui/button';

import { dark } from './lib/color';

// Create tamagui instance from config
const tamaguiConfig = createTamagui(config)

const TestButton = styled(Button, {
  backgroundColor: dark.colors.blue.hex,
  color: "#f38ba8",
  pressStyle: {
    backgroundColor: "#eba0ac"
  }
})

const App = (): React.JSX.Element => {
  return <TamaguiProvider config={tamaguiConfig}>
    <View>
      <Text>
        This is the header
      </Text>
      <TestButton >Hello world</TestButton>
    </View>
  </TamaguiProvider>
}

export default App;
