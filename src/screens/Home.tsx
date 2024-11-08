import React from 'react';
import {Text, View} from '@tamagui/core';

import {dark} from '@lib/color.ts';
import {StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text alignSelf="center" fontSize={20} fontWeight={100}>
        This is the home screen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.colors.crust.hex,
    flex: 1,
  },
});
