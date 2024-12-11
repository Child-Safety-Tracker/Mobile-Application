import React, {createContext, useEffect, useState} from 'react';

const AlertContext = createContext(null);

const AlertContextProvider = ({children}: any) => {
  return <AlertContext.Provider value={{}}>{children}</AlertContext.Provider>;
};

export default AlertContextProvider;
