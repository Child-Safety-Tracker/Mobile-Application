import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alert from '../screens/alert/Alert';
import AlertConfigurationReference from '../screens/alert/Alert.Configuration.Reference';
import AlertConfigurationBoundary from '../screens/alert/Alert.Configuration.Boundary';

const AlertStack = createStackNavigator();

const AlertStackNavigator = () => {
  return (
    <AlertStack.Navigator screenOptions={{headerShown: false}}>
      <AlertStack.Screen name={'Alert'} component={Alert} />
      <AlertStack.Screen
        name={'Alert Reference'}
        component={AlertConfigurationReference}
      />
      <AlertStack.Screen
        name={'Alert Boundary'}
        component={AlertConfigurationBoundary}
      />
    </AlertStack.Navigator>
  );
};

export default AlertStackNavigator;
