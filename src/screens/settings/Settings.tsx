import React from 'react';
import {View, StyleSheet} from 'react-native';

import {dark} from '@lib/colors/theme';

const SettingScreen = () => {
  return <View style={styles.container} />;
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.colors.crust.hex,
  },
});
