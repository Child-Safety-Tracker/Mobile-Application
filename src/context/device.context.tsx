import React, {useState, createContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {device_request} from '../APIs/device';

export const DeviceContext = createContext({});

const DeviceContextProvider = ({children}: any) => {
  console.log('Device Context Provider get rendered');
  const [device, setDevice] = useState({});
  // Select device by index
  const [selectedDevice, setSelectedDevice] = useState(0);
  const [isLoadingDevice, setIsLoadingDevice] = useState(true);

  useEffect(() => {
    device_request('abcd')
      .then(result => {
        setDevice(result);
        setIsLoadingDevice(false);
        console.log('[Device] Successfully fetched device info');
      })
      .catch(error => {
        console.log('[Device] Failed to fetch device info');
        console.log(error);
      });
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        device: device,
        selectedDevice: selectedDevice,
        setSelectedDevice: setSelectedDevice,
        isLoadingDevice: isLoadingDevice,
      }}>
        {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
