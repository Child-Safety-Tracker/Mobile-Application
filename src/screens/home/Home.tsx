import React, {useContext} from 'react';
import {Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';

import HomeHeading from './components/Home.Heading';
import HomeMap from './components/Home.Map';

// @ts-ignore
import {dark} from '@lib/colors/theme.ts';
// @ts-ignore
import {deviceColors} from '@lib/colors/device';
// @ts-ignore
import {fontSize} from '@lib/fontSize';
import HomeDeviceInfo from './components/Home.DeviceInfo';
import FlatList = Animated.FlatList;

import LocationContextProvider from '../../context/location.context';
import {DeviceContext} from '../../context/device.context';
import HomeDeviceInfoList from './components/Home.DeviceInfoList';

let deviceNum = 2;
const HomeScreen = () => {
  const {device, isLoadingDevice, selectedDevice, setSelectedDevice}: any =
    useContext(DeviceContext);

  return isLoadingDevice ? null : (
    <LocationContextProvider>
      <View style={styles.container}>
        <View style={styles.homeHeadingWrapper}>
          <HomeHeading />
        </View>
        <View style={styles.homeMapWrapper}>
          <HomeMap />
        </View>
        <View style={styles.deviceInfoContainer}>
          <Text style={styles.deviceInfoHeader}>
            Devices - <Text>{deviceNum}</Text>
          </Text>
          <View style={styles.deviceInfoList}>
            <HomeDeviceInfoList />
          </View>
        </View>
      </View>
    </LocationContextProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
    flex: 1,
    flexDirection: 'column',
  },

  homeHeadingWrapper: {
    flex: 0.1,
  },

  homeMapWrapper: {
    flex: 0.5,
  },

  deviceInfoContainer: {
    flex: 0.4,
  },

  deviceInfoHeader: {
    flex: 0.2,
    color: dark.colors.text.hex,
    fontSize: fontSize.heading.smallMedium,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },

  deviceInfoList: {
    flex: 0.8,
  },
});
