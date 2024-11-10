import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@tamagui/core';
import {fontSize} from '@lib/fontSize';
import {dark} from '@lib/colors/theme';

const AlertHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Alert config</Text>
    </View>
  );
};

export default AlertHeading;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  heading: {
    fontSize: fontSize.heading.large,
    fontWeight: 'bold',
    color: dark.colors.text.hex,
  },
});
