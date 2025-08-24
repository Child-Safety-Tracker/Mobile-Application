import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticationLogin from '../screens/authentication/Authentication.Login';
import AuthenticationRegister from '../screens/authentication/Authentication.Register';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen
        name={'Login'}
        component={AuthenticationLogin}
      />
      <AuthenticationStack.Screen
        name={'Register'}
        component={AuthenticationRegister}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
