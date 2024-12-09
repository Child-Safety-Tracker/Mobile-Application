import React, {
  useState,
  createContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import {device_request, updateDeviceStatus} from '../APIs/device';

export const DeviceContext = createContext({});

const DeviceContextProvider = ({children}: any) => {
  console.log('Device Context Provider get rendered');

  const [device, setDevice] = useState([]);
  // Select device by index
  const [selectedDevice, setSelectedDevice] = useState(0);
  const [isLoadingDevice, setIsLoadingDevice] = useState(true);

  const updateDevice = useCallback((deviceId: any, status: boolean) => {
    updateDeviceStatus({
      deviceId: deviceId,
      enabled: status,
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log('[Device] Failed to update device status');
        console.log(error);
      });
    // Fetch device again
    sendDeviceRequest();
  }, []);

  const sendDeviceRequest = () => {
    setIsLoadingDevice(true);
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
  };

  useEffect(() => {
    sendDeviceRequest();
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        device: device,
        selectedDevice: selectedDevice,
        setSelectedDevice: setSelectedDevice,
        isLoadingDevice: isLoadingDevice,
        updateDevice: updateDevice,
      }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
