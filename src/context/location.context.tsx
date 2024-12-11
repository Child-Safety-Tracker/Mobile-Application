import React, {useState, createContext, useEffect, useContext} from 'react';

import {location_request} from '../APIs/location';
import {DeviceContext} from './device.context';

export const LocationContext = createContext({});

const LocationContextProvider = ({children}: any) => {
  const {device, isLoadingDevice}: any = useContext(DeviceContext);

  const [location, setLocation] = useState({});
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  let deviceIds: string[], privateKeys: string[];
  // Extract array of Id and Keys
  if (!isLoadingDevice) {
    deviceIds = device.map((element: any) => {
      return element.deviceId;
    });
    privateKeys = device.map((element: any) => {
      return element.privateKey;
    });
  }

  const sendLocationRequest = () => {
    setIsLoadingLocation(true);
    location_request({
      privateKeys: privateKeys,
      ids: deviceIds,
    })
      .then(result => {
        console.log(result);
        setLocation(result);
        setIsLoadingLocation(false);
        console.log('[Location] Successfully fetched locations');
      })
      .catch(error => {
        console.log('[Location] Failed to fetch locations');
        console.log(error);
      });
  };

  useEffect(() => {
    // Only call when the device is loaded
    sendLocationRequest();
  }, [device]);

  return (
    <LocationContext.Provider
      value={{
        location: location,
        isLoadingLocation: isLoadingLocation,
        setIsLoadingLocation: setIsLoadingLocation,
        sendLocationRequest: sendLocationRequest,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
export default LocationContextProvider;
