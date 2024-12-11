import './src/gesture-handler'; // Required to build mobile applications

import React from 'react';
import Navigator from './src/navigator/Navigator';

import DeviceContextProvider from './src/context/Device.context';

const App = (): React.JSX.Element => {
  return (
    <DeviceContextProvider>
      <Navigator />;
    </DeviceContextProvider>
  );
};

export default App;
