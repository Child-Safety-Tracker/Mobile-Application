import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import {dark} from '@lib/color.ts';

import HomeHeading from './components/Home.Heading';
import HomeMap from './components/Home.Map';
import {Text} from '@tamagui/core';

import {fontSize} from '@lib/fontSize';
import HomeDeviceInfo from './components/Home.DeviceInfo';
import FlatList = Animated.FlatList;

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
    <View style={styles.container}>
      <HomeHeading />
      <HomeMap />
      <View
        style={{
          flex: 0.35,
        }}>
        <Text
          style={{
            flex: 0.25,
            color: dark.colors.text.hex,
            fontSize: fontSize.heading.smallMedium,
            fontWeight: 'bold',
          }}>
          Devices - <Text>{deviceNum}</Text>
        </Text>
        <View style={styles.deviceInfoContainer}>
          <FlatList
            data={devices}
            showsVerticalScrollIndicator={false}
            initialScrollIndex={0}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={Separator}
            renderItem={({item}) => (
              <HomeDeviceInfo deviceName={item.deviceName} />
            )}
          />
        </View>
      </View>
    </View>
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

  deviceInfoContainer: {
    flex: 0.75,
    justifyContent: 'space-between',
  },
});
