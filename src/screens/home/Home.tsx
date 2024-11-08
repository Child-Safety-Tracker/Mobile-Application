import React from 'react';
import {View, StyleSheet} from 'react-native';
import Mapbox from '@rnmapbox/maps';

import {dark} from '@lib/color.ts';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';

import HomeHeading from './components/Home.Heading';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeading />
      <View
        style={{
          flex: 0.55,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Mapbox.MapView
          style={{
            width: '100%',
            aspectRatio: 1,
            overflow: 'hidden',
            borderRadius: 20,
          }}
        />
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
