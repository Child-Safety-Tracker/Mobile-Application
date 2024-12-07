import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera, PointAnnotation} from '@rnmapbox/maps';

import {LocationContext} from '../../../context/location.context';
// @ts-ignore
import MapPinFillIcon from '@assets/icons/screens/home/map-pin-fill.svg';
import {deviceColorsDark} from '@lib/colors/device';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const HomeMap = () => {
  const {location, isLoadingLocation}: any = useContext(LocationContext);
  let coordinates: any[] | undefined;

  if (!isLoadingLocation) {
    console.log(location);
    coordinates = [location[0].payload.longitude, location[0].payload.latitude];
  }

  // @ts-ignore
  return isLoadingLocation ? null : (
    <View style={styles.container}>
      <Mapbox.MapView
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        style={styles.map}>
        {location.map((element: any, index: number) => {
          return (
            <PointAnnotation coordinate={[element.payload.longitude, element.payload.latitude]} id={index.toString()} key={element.id} >
              <MapPinFillIcon width={25} height={25} color={Object.values(deviceColorsDark)[index]} />
           </PointAnnotation>
          );
        })}
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
