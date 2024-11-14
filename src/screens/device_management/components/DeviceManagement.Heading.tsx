import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {fontSize} from '@lib/fontSize';
import {dark} from '@lib/colors/theme';

const DeviceManagementHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Devices</Text>
    </View>
  );
};

export default DeviceManagementHeading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  heading: {
    color: dark.colors.text.hex,
    fontWeight: 'bold',
    fontSize: fontSize.heading.large,
  },
});
