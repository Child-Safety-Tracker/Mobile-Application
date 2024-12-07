import React, {useState, createContext, useEffect} from 'react';
import {device_request} from '../APIs/device';

export const DeviceContext = createContext({});

const DeviceContextProvider = ({children}: any) => {
  const [device, setDevice] = useState({});
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
      value={{device: device, isLoadingDevice: isLoadingDevice}}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
