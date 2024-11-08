import React from 'react';
import {StyleSheet} from 'react-native';

import {View} from '@tamagui/core';

import {dark} from '../../../lib/color.ts';
import HomeHeading from './components/Home.Heading';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeading />
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
});
