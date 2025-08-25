import React, {createContext, useState} from 'react';

export const AuthenticationContext = createContext({});

const AuthenticationContextProvider = ({children}: any) => {
    console.log('[Context] Authentication Context Provider get rendered');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthenticationContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                setIsLoggedIn: setIsLoggedIn,
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;
