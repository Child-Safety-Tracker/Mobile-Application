import React, {createContext, useContext, useEffect, useState} from 'react';
import {DeviceContext} from './Device.context';
import {location_request} from '../APIs/location';

export const Location7DaysContext = createContext({});

const Location7DaysContextProvider = ({children}: any) => {
  const {device, isLoadingDevice}: any = useContext(DeviceContext);

  console.log('Location 7 days Context Provider get called');

  const [locations, setLocations] = useState({});
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);

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

  const sendLocation7DaysRequest = () => {
    setIsLoadingLocations(true);
    location_request({
      privateKeys: privateKeys,
      ids: deviceIds,
      days: 7,
    })
      .then(result => {
        setLocations(result);
        setIsLoadingLocations(false);
        console.log('[Location] Successfully fetched 7 days locations');
      })
      .catch(error => {
        console.log('[Location] Failed to fetch 7 days locations');
        console.log(error);
      });
  };

  useEffect(() => {
    // Only call when the device is loaded
    // sendLocation7DaysRequest();
  }, [device]);

  return (
    <Location7DaysContext.Provider
      value={{
        locations: locations,
        isLoadingLocations: isLoadingLocations,
        setIsLoadingLocations: setIsLoadingLocations,
        sendLocation7DaysRequest: sendLocation7DaysRequest,
      }}>
      {children}
    </Location7DaysContext.Provider>
  );
};

export default Location7DaysContextProvider;
