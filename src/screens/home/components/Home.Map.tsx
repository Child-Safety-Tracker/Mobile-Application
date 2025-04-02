import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera, PointAnnotation} from '@rnmapbox/maps';

import {LocationContext} from '../../../context/Location.context';
// @ts-ignore
import MapPinFillIcon from '@assets/icons/screens/home/map-pin-fill.svg';
// @ts-ignore
import {deviceColorsDark} from '@lib/colors/device';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';
import {DeviceContext} from '../../../context/Device.context';
import {Location7DaysContext} from '../../../context/Location7Days.context';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const HomeMap = ({showHistory}: {showHistory: boolean}) => {
  const {location, isLoadingLocation}: any = useContext(LocationContext);
  const {locations, isLoadingLocations}: any = useContext(Location7DaysContext);
  const {device, selectedDevice}: any = useContext(DeviceContext);

  // Map the corresponding list of location histories to device
  if (!isLoadingLocations) {
    const deviceLocationHistories = locations[device[selectedDevice].deviceId].map(
      (locationInfo: any) => {
        return {
          longitude: locationInfo.payload.longitude,
          latitude: locationInfo.payload.latitude,
        };
      },
    );
    console.log(deviceLocationHistories);
  }

  let coordinates: any[] | undefined;

  // Latest coordinate
  if (!isLoadingLocation) {
    coordinates = [
      location[selectedDevice].payload.longitude,
      location[selectedDevice].payload.latitude,
    ];
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
            <PointAnnotation
              coordinate={[element.payload.longitude, element.payload.latitude]}
              id={index.toString()}
              key={element.id}>
              <MapPinFillIcon
                width={25}
                height={25}
                color={Object.values(deviceColorsDark)[index]}
              />
            </PointAnnotation>
          );
        })}
        <Camera centerCoordinate={coordinates} zoomLevel={17} />
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
