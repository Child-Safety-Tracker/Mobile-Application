import React from 'react';
import {View, StyleSheet} from 'react-native';

import {dark} from '@lib/color.ts';

import HomeHeading from './components/Home.Heading';
import HomeMap from './components/Home.Map';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeading />
      <HomeMap />
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
