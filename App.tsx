import React from 'react';

import { TamaguiProvider, createTamagui} from '@tamagui/core';
import config from '@tamagui/config/v3'

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlertScreen from './src/screens/Alert';

// Create tamagui instance from config
const tamaguiConfig = createTamagui(config)

// Create a bottom tab navigator
const Tab = createBottomTabNavigator()

const App = (): React.JSX.Element => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Alert" component={AlertScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  )
}

export default App;
