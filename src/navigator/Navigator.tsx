import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home/Home';
import FindDeviceScreen from '../screens/find_device/FindDevice';
import SettingScreen from '../screens/settings/Settings';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// @ts-ignore
import HomeIconFill from '@assets/icons/navigator/home-fill.svg';
// @ts-ignore
import HomeIconLine from '@assets/icons/navigator/home-line.svg';
// @ts-ignore
import AlertIconFill from '@assets/icons/navigator/error-warning-fill.svg';
// @ts-ignore
import AlertIconLine from '@assets/icons/navigator/error-warning-line.svg';
// @ts-ignore
import FindDeviceIconFill from '@assets/icons/navigator/search-fill.svg';
// @ts-ignore
import FindDeviceIconLine from '@assets/icons/navigator/search-line.svg';
// @ts-ignore
import DevicesIconFill from '@assets/icons/navigator/instance-fill.svg';
// @ts-ignore
import DevicesIconLine from '@assets/icons/navigator/instance-line.svg';
// @ts-ignore
import SettingIconFill from '@assets/icons/navigator/settings-fill.svg';
// @ts-ignore
import SettingIconLine from '@assets/icons/navigator/settings-line.svg';

import {dark} from '@lib/colors/theme';
import LocationContextProvider from '../context/Location.context';
import {DeviceContext} from '../context/Device.context';
import AlertStackNavigator from './Alert.Navigator';
import DeviceManagementNavigator from './DeviceManagement.Navigator';
import {AuthenticationContext} from '../context/Authentication.context';
import NavigatorAuthentication from './Navigator.Authentication';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const Navigator = () => {
  const {isLoadingDevice}: any = useContext(DeviceContext);

  const {isLoggedIn}: any = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <NavigatorAuthentication />
      ) : isLoadingDevice ? null : (
        <LocationContextProvider>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: dark.colors.mantle.hex,
              },
              tabBarItemStyle: {
                // A top padding of 5 to center the icon vertically
                paddingTop: 5,
              },
              // Custom icons for the navigation bar
              tabBarIcon: ({focused, size}) => {
                let returnedIcon;
                switch (route.name) {
                  case 'Home':
                    returnedIcon = focused ? (
                      <HomeIconFill
                        width={size}
                        height={size}
                        fill={dark.colors.teal.hex}
                      />
                    ) : (
                      <HomeIconLine
                        width={size}
                        height={size}
                        fill={dark.colors.text.hex}
                      />
                    );
                    break;
                  case 'Alert Navigator':
                    returnedIcon = focused ? (
                      <AlertIconFill
                        width={size}
                        height={size}
                        fill={dark.colors.teal.hex}
                      />
                    ) : (
                      <AlertIconLine
                        width={size}
                        height={size}
                        fill={dark.colors.text.hex}
                      />
                    );
                    break;
                  case 'FindDevice':
                    returnedIcon = focused ? (
                      <FindDeviceIconFill
                        width={size}
                        height={size}
                        fill={dark.colors.teal.hex}
                      />
                    ) : (
                      <FindDeviceIconLine
                        width={size}
                        height={size}
                        fill={dark.colors.text.hex}
                      />
                    );
                    break;
                  case 'DeviceManagement Navigator':
                    returnedIcon = focused ? (
                      <DevicesIconFill
                        width={size}
                        height={size}
                        fill={dark.colors.teal.hex}
                      />
                    ) : (
                      <DevicesIconLine
                        width={size}
                        height={size}
                        fill={dark.colors.text.hex}
                      />
                    );
                    break;
                  case 'Setting':
                    returnedIcon = focused ? (
                      <SettingIconFill
                        width={size}
                        height={size}
                        fill={dark.colors.teal.hex}
                      />
                    ) : (
                      <SettingIconLine
                        width={size}
                        height={size}
                        fill={dark.colors.text.hex}
                      />
                    );
                    break;
                }
                return returnedIcon;
              },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
              name="Alert Navigator"
              component={AlertStackNavigator}
            />
            <Tab.Screen name="FindDevice" component={FindDeviceScreen} />
            <Tab.Screen
              name="DeviceManagement Navigator"
              component={DeviceManagementNavigator}
            />
            <Tab.Screen name="Setting" component={SettingScreen} />
          </Tab.Navigator>
        </LocationContextProvider>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
