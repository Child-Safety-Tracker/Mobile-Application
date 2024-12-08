import React from 'react';
import Navigator from './src/navigator/Navigator';

import DeviceContextProvider from './src/context/device.context';

const App = (): React.JSX.Element => {
  return (
    <DeviceContextProvider>
      <Navigator />;
    </DeviceContextProvider>
  );
};

export default App;
