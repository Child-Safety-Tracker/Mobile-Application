import React from 'react';
import {View, StyleSheet} from 'react-native';

import {dark} from '@lib/color.ts';

import HomeHeading from './components/Home.Heading';
import HomeMap from './components/Home.Map';
import {Text} from '@tamagui/core';

import {fontSize} from '@lib/fontSize';
import HomeDeviceInfo from './components/Home.DeviceInfo';

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
            color: dark.colors.text.hex,
            fontSize: fontSize.heading.smallMedium,
            fontWeight: 'bold',
          }}>
          Devices - <Text>{deviceNum}</Text>
        </Text>
        <HomeDeviceInfo />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
    flex: 1,
    flexDirection: 'column',
  },
});
