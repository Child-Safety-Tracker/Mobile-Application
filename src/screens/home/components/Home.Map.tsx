import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera} from '@rnmapbox/maps';

import {LocationContext} from '../../../context/location.context';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const HomeMap = () => {
  const {location, isLoading}: any = useContext(LocationContext);
  let coordinates;

  if (!isLoading) {
    console.log(location);
    coordinates = [location.payload.longitude, location.payload.latitude];
  }

  return isLoading ? null : (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Camera centerCoordinate={coordinates} zoomLevel={18} />
      </Mapbox.MapView>
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
