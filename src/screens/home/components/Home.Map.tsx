import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';

import {LocationContext} from '../../../context/location.context';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const HomeMap = () => {
  const {location}: any = useContext(LocationContext);
  console.log(location);
  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} />
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
});
