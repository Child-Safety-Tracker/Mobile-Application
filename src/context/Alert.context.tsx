import React, {createContext, useState} from 'react';

export const AlertContext = createContext({});

const AlertContextProvider = ({children}: any) => {
  const [pressedCoordinate, setPressedCoordinate] = useState([]);

  return (
    <AlertContext.Provider
      value={{
        pressedCoordinate: pressedCoordinate,
        setPressedCoordinate: setPressedCoordinate,
      }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
