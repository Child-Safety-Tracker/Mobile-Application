import {View, StyleSheet} from 'react-native';
import React from 'react';

import {dark} from '@lib/colors/theme';
import FindDeviceHeading from './components/FindDevice.Heading';
import FindDeviceSelection from './components/FindDevice.Selection';

// @ts-ignore
import UserLocationIcon from '@assets/icons/screens/find_device/circle-dot.svg';
import FindDeviceMap from './components/FindDevice.Map';

const FindDeviceScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <FindDeviceHeading />
      </View>
      <View style={styles.findDeviceSelectionWrapper}>
        <FindDeviceSelection />
      </View>
      <View style={styles.findDeviceMapWrapper}>
        <FindDeviceMap />
      </View>
    </View>
  );
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

  findDeviceMapWrapper: {
    flex: 0.75,
  },
});
