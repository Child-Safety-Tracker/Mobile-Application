import React, {useState, createContext, useEffect} from 'react';

import {location_request} from '../APIs/location/location';

export const LocationContext = createContext({});

const LocationContextProvider = (props: any) => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    location_request('http://192.168.251.89:1234/location', {
      privateKey: 'hUotVQIdoniIfacuUNHahmnNK98GRV6+kn+sOQ==',
      ids: ['afirx1LlNk5vh7BnbGukU+L8o9E3pHhd/uogNOdmdv8='],
    })
      .then(result => {
        console.log(result);
        setLocation(result);
        setIsLoading(false);
        console.log('[Location] Successfully fetched locations');
      })
      .catch(error => {
        console.log('[Location] Failed to fetch locations');
        console.log(error);
      });
  }, []);

  return (
    <LocationContext.Provider
      value={{location: location, isLoading: isLoading}}>
      {props.children}
    </LocationContext.Provider>
  );
};
export default LocationContextProvider;
