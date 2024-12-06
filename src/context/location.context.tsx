import React, {useState, createContext, useEffect} from 'react';

import {location_request} from '../APIs/location/location';

export const LocationContext = createContext({});

const LocationContextProvider = (props: any) => {
  const [location, setLocation] = React.useState({});

  useEffect(() => {
    const locationFetchingAwait = async () => {
      const locationResult = await location_request(
        'http://192.168.69.89:1234/location',
        {
          privateKey: 'hUotVQIdoniIfacuUNHahmnNK98GRV6+kn+sOQ==',
          ids: ['afirx1LlNk5vh7BnbGukU+L8o9E3pHhd/uogNOdmdv8='],
        },
      );
      setLocation(locationResult);
    };
    locationFetchingAwait()
      .then(() => {
        console.log('[Location] Fetched successfully');
      })
      .catch(error => {
        console.log('[location] Fetched error: ');
        console.log(error);
      });
  }, []);

  return (
    <LocationContext.Provider value={{location: location}}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
