import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import AlertScreen from '../screens/Alert';
import FindDeviceScreen from '../screens/FindDevice';
import DeviceManagementScreen from '../screens/DeviceManagement';
import SettingScreen from '../screens/Settings';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// @ts-ignore
import HomeIconFill from '@assets/navigator/home-fill.svg';
// @ts-ignore
import HomeIconLine from '@assets/navigator/home-line.svg';
// @ts-ignore
import AlertIconFill from '@assets/navigator/error-warning-fill.svg';
// @ts-ignore
import AlertIconLine from '@assets/navigator/error-warning-line.svg';
// @ts-ignore
import FindDeviceIconFill from '@assets/navigator/search-fill.svg';
// @ts-ignore
import FindDeviceIconLine from '@assets/navigator/search-line.svg';
// @ts-ignore
import DevicesIconFill from '@assets/navigator/instance-fill.svg';
// @ts-ignore
import DevicesIconLine from '@assets/navigator/instance-line.svg';
// @ts-ignore
import SettingIconFill from '@assets/navigator/settings-fill.svg';
// @ts-ignore
import SettingIconLine from '@assets/navigator/settings-line.svg';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarItemStyle: {
            // A top padding of 5 to center the icon vertically
            paddingTop: 5,
          },
          // Custom icons for the navigation bar
          tabBarIcon: ({focused, color, size}) => {
            let returnedIcon;
            switch (route.name) {
              case 'Home':
                returnedIcon = focused ? (
                  <HomeIconFill width={size} height={size} fill={'#000000'} />
                ) : (
                  <HomeIconLine width={size} height={size} fill={'#000000'} />
                );
                break;
              case 'Alert':
                returnedIcon = focused ? (
                  <AlertIconFill width={size} height={size} fill={'#000000'} />
                ) : (
                  <AlertIconLine width={size} height={size} fill={'#000000'} />
                );
                break;
              case 'FindDevice':
                returnedIcon = focused ? (
                  <FindDeviceIconFill
                    width={size}
                    height={size}
                    fill={'#000000'}
                  />
                ) : (
                  <FindDeviceIconLine
                    width={size}
                    height={size}
                    fill={'#000000'}
                  />
                );
                break;
              case 'DeviceManagement':
                returnedIcon = focused ? (
                  <DevicesIconFill
                    width={size}
                    height={size}
                    fill={'#000000'}
                  />
                ) : (
                  <DevicesIconLine
                    width={size}
                    height={size}
                    fill={'#000000'}
                  />
                );
                break;
              case 'Setting':
                returnedIcon = focused ? (
                  <SettingIconFill
                    width={size}
                    height={size}
                    fill={'#000000'}
                  />
                ) : (
                  <SettingIconLine
                    width={size}
                    height={size}
                    fill={'#000000'}
                  />
                );
                break;
            }
            return returnedIcon;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Alert" component={AlertScreen} />
        <Tab.Screen name="FindDevice" component={FindDeviceScreen} />
        <Tab.Screen
          name="DeviceManagement"
          component={DeviceManagementScreen}
        />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
