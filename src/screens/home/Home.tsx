import React, {useContext} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

import {dark} from '@lib/colors/theme.ts';
import {deviceColors} from '@lib/colors/device';

import HomeHeading from './components/Home.Heading';
import HomeMap from './components/Home.Map';

import {fontSize} from '@lib/fontSize';
import HomeDeviceInfo from './components/Home.DeviceInfo';
import FlatList = Animated.FlatList;

import LocationContextProvider from '../../context/location.context';

const devices = [
  {
    id: 1,
    deviceName: 'Device 1',
  },
  {
    id: 2,
    deviceName: 'Device 2',
  },
  {
    id: 3,
    deviceName: 'Device 3',
  },
];

const Separator = () => <View style={{height: 10}} />;

let deviceNum = 2;
const HomeScreen = () => {
  return (
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
            <FlatList
              data={devices}
              showsVerticalScrollIndicator={false}
              initialScrollIndex={0}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={Separator}
              renderItem={({item, index}) => (
                <HomeDeviceInfo
                  deviceName={item.deviceName}
                  deviceColor={Object.values(deviceColors)[index]}
                />
              )}
            />
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
    justifyContent: 'space-between',
  },
});
