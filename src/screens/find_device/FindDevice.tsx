import {Animated, StyleSheet, useAnimatedValue, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {orientation, SensorTypes, setUpdateIntervalForType,} from 'react-native-sensors';

import {dark} from '@lib/colors/theme';
import FindDeviceHeading from './components/FindDevice.Heading';
import FindDeviceSelection from './components/FindDevice.Selection';

// @ts-ignore
import ArrowIcon from '@assets/icons/screens/find_device/arrow.svg';
import FindDeviceDistance from './components/FindDevice.Distance';
import {DeviceContext} from "../../context/Device.context";
import EmptyDevice from "../../components/EmptyDevice";

setUpdateIntervalForType(SensorTypes.orientation, 200); // defaults to 100ms

// Dedicated main view to render below heading for empty device list handler
const MainView = () => {

}

const FindDeviceScreen = () => {
    const {device}: any = useContext(DeviceContext)

    const [selectedIndex, setSelectedIndex] = useState(0);
    const rotation = useAnimatedValue(0);

    // The tracking device angle with respect to user location for direction
    const trackingDeviceAngle = useRef(0);

    // Register the sensor read operation
    const subscription = orientation.subscribe(
        ({qx, qy, qz, qw, pitch, roll, yaw, timestamp}) => {
            // Convert Euler angles to rotation matrix
            const cosYaw = Math.cos(yaw);
            const sinYaw = Math.sin(yaw);
            const cosPitch = Math.cos(pitch);
            const sinPitch = Math.sin(pitch);
            const cosRoll = Math.cos(roll);
            const sinRoll = Math.sin(roll);

            const rotationMatrix = [
                cosYaw * cosPitch,
                cosYaw * sinPitch * sinRoll - sinYaw * cosRoll,
                cosYaw * sinPitch * cosRoll + sinYaw * sinRoll,
                sinYaw * cosPitch,
                sinYaw * sinPitch * sinRoll + cosYaw * cosRoll,
                sinYaw * sinPitch * cosRoll - cosYaw * sinRoll,
                -sinPitch,
                cosPitch * sinRoll,
                cosPitch * cosRoll,
            ];

            // Angle calculation (in degrees)
            const angle = Math.atan2(rotationMatrix[1], rotationMatrix[0]);

            // Animated view configuration
            Animated.timing(rotation, {
                toValue: angle + trackingDeviceAngle.current,
                duration: 300,
                useNativeDriver: true,
            }).start();
        },
    );

    // If device list exist
    if (!!device.length) {
        return (
            <View style={styles.container}>
                <View style={styles.headingWrapper}>
                    <FindDeviceHeading enabled={true}/>
                </View>
                <View style={styles.findDeviceSelectionWrapper}>
                    <FindDeviceSelection updateIndex={setSelectedIndex}/>
                </View>
                <View style={styles.findDeviceDistanceWrapper}>
                    <FindDeviceDistance deviceIndex={selectedIndex} trackingDeviceAngle={trackingDeviceAngle}/>
                </View>
                <Animated.View
                    style={{
                        ...styles.findDeviceIndicatorWrapper,
                        transform: [
                            {
                                rotate: rotation.interpolate({
                                    inputRange: [0, 2 * Math.PI],
                                    outputRange: [`${0}deg`, `${360}deg`],
                                }),
                            },
                        ],
                    }}>
                    <ArrowIcon width={170} height={170} color={dark.colors.teal.hex}/>
                </Animated.View>
            </View>
        )
    }else {
        return <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <FindDeviceHeading enabled={false}/>
            </View>
            <EmptyDevice />
        </View>
    }
};

export default FindDeviceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: dark.colors.crust.hex,
    },

    headingWrapper: {
        flex: 0.1,
    },

    findDeviceSelectionWrapper: {
        flex: 0.12,
    },

    findDeviceDistanceWrapper: {
        flex: 0.1,
        alignItems: 'center',
    },

    findDeviceIndicatorWrapper: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
