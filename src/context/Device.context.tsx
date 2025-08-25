import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {device_request, updateDeviceStatus} from '../APIs/device';
import {AuthenticationContext} from "./Authentication.context";

export const DeviceContext = createContext({});

const DeviceContextProvider = ({children}: any) => {
    console.log('[Context] Device Context Provider get rendered');

    const {isLoggedIn}: any = useContext(AuthenticationContext)

    const [device, setDevice] = useState([]);
    // Select device by index
    const [selectedDevice, setSelectedDevice] = useState(0);
    const [isLoadingDevice, setIsLoadingDevice] = useState(true);
    const isDebugMode = true;

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

    const sendDeviceRequest = async () => {
        setIsLoadingDevice(true);
        try {
            const result = await device_request('abcd');
            setDevice(result);
            console.log('[Device] Successfully fetched device info');
        } catch (error) {
            console.log('[Device] Failed to fetch device info');
            console.log(error);
        } finally {
            setIsLoadingDevice(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await sendDeviceRequest();
        };
        if (isLoggedIn) {
            fetchData();
        } else {
            // Clear user data on logs out
            setDevice([])
            setIsLoadingDevice(false)
        }
    }, [isLoggedIn]);

    return (
        <DeviceContext.Provider
            value={{
                isDebugMode: isDebugMode,
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
