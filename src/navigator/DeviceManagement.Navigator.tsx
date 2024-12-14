import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DeviceManagement from '../screens/device_management/DeviceManagement';
import DeviceManagementAdd from '../screens/device_management/DeviceManagement.Add';

const DeviceManagementStack = createStackNavigator();

const DeviceManagementNavigator = () => {
  return (
    <DeviceManagementStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DeviceManagementStack.Screen
        name={'DeviceManagement'}
        component={DeviceManagement}
      />
      <DeviceManagementStack.Screen
        name={'DeviceManagementAdd'}
        component={DeviceManagementAdd}
      />
    </DeviceManagementStack.Navigator>
  );
};

export default DeviceManagementNavigator;
