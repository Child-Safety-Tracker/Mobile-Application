import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera, PointAnnotation} from '@rnmapbox/maps';

import {LocationContext} from '../../../context/location.context';

import MapPinFillIcon from '@assets/icons/screens/home/map-pin-fill.svg';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const HomeMap = () => {
  const {location, isLoading}: any = useContext(LocationContext);
  let coordinates: any[] | undefined;

  if (!isLoading) {
    console.log(location);
    coordinates = [location.payload.longitude, location.payload.latitude];
  }

  // @ts-ignore
  return isLoading ? null : (
    <View style={styles.container}>
      <Mapbox.MapView
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        style={styles.map}>
        <PointAnnotation coordinate={coordinates!} id={''}>
          <MapPinFillIcon width={25} height={25} color={'white'} />
        </PointAnnotation>
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
