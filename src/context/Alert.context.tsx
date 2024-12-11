import React, {createContext, useState} from 'react';

export const AlertContext = createContext({});

const AlertContextProvider = ({children}: any) => {
  const [pressedCoordinate, setPressedCoordinate] = useState([]);
  const [safeZoneRadius, setSafeZoneRadius] = useState(0);

  return (
    <AlertContext.Provider
      value={{
        pressedCoordinate: pressedCoordinate,
        setPressedCoordinate: setPressedCoordinate,
        safeZoneRadius: safeZoneRadius,
        setSafeZoneRadius: setSafeZoneRadius,
      }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
