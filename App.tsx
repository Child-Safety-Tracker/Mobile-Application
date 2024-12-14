import './src/gesture-handler'; // Required to build mobile applications

import React from 'react';
import Navigator from './src/navigator/Navigator';

import DeviceContextProvider from './src/context/Device.context';
import AuthenticationContextProvider from './src/context/Authentication.context';

const App = (): React.JSX.Element => {
  return (
    <AuthenticationContextProvider>
      <DeviceContextProvider>
        <Navigator />;
      </DeviceContextProvider>
    </AuthenticationContextProvider>
  );
};

export default App;
