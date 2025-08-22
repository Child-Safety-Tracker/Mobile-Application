import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera, PointAnnotation} from '@rnmapbox/maps';

import {LocationContext} from '../../../context/Location.context';
// @ts-ignore
import MapPinFillIcon from '@assets/icons/screens/home/map-pin-fill.svg';
// @ts-ignore
import CircleDot from '@assets/icons/screens/home/circle-dot.svg'
// @ts-ignore
import {deviceColorsDark} from '@lib/colors/device';

// @ts-ignore
import {DeviceContext} from '../../../context/Device.context';
import {Location7DaysContext} from '../../../context/Location7Days.context';
import {light} from "../../../../lib/colors/theme";

Mapbox.setAccessToken('sk.eyJ1IjoidHVhbmtpZXQxNyIsImEiOiJjbWMxcjV0YnQwMGZnMmtzaTZseGNjbWx1In0.86_fpZTYg9DP3J2wK4kBIw');

const HomeMap = ({showHistory}: {showHistory: boolean}) => {
  const {location, isLoadingLocation}: any = useContext(LocationContext);
  const {locations, isLoadingLocations}: any = useContext(Location7DaysContext);
  const {device, selectedDevice}: any = useContext(DeviceContext);

  // Map the corresponding list of location histories to device
  let locationHistories;
  if (!isLoadingLocations) {
    locationHistories = locations[device[selectedDevice].deviceId].map(
      (locationInfo: any, index: number) => {
        return (
          <PointAnnotation
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={index.toString()}
            id={index.toString()}
            coordinate={[
              locationInfo.payload.longitude,
              locationInfo.payload.latitude,
            ]}>
            <CircleDot
              width={20}
              height={20}
              color={light.colors.teal.hex}
            />
          </PointAnnotation>
        );
      },
    );
  }

  let coordinates: any[] | undefined;

  // Latest coordinate
  if (!isLoadingLocation) {
    coordinates = [
      location[selectedDevice].payload.longitude,
      location[selectedDevice].payload.latitude,
    ];
  }

  let latestLocations;
  if (!isLoadingLocation) {
    latestLocations = location.map((element: any, index: number) => {
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
    });
  }

  // @ts-ignore
  return isLoadingLocation ? null : (
    <View style={styles.container}>
      <Mapbox.MapView
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        style={styles.map}>
        {showHistory && !isLoadingLocations
          ? locationHistories
          : latestLocations}
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
