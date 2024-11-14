import {View, StyleSheet} from 'react-native';
import React from 'react';

import {dark} from '@lib/colors/theme';

const FindDeviceScreen = () => {
  return <View style={styles.container} />;
};

export default FindDeviceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.colors.crust.hex,
  },
});
