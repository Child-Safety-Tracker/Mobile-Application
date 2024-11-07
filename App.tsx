import React from 'react';

import { TamaguiProvider, createTamagui} from '@tamagui/core';
import config from '@tamagui/config/v3'

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '@screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlertScreen from '@screens/Alert';
import FindDeviceScreen from '@screens/FindDevice';
import DeviceManagementScreen from '@screens/DeviceManagement';
import SettingScreen from '@screens/Settings';

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
          <Tab.Screen name="FindDevice" component={FindDeviceScreen} />
          <Tab.Screen name="DeviceManagement" component={DeviceManagementScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  )
}

export default App;
