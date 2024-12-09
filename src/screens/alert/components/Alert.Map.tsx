import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Mapbox, {Camera, PointAnnotation} from '@rnmapbox/maps';
import {LocationContext} from '../../../context/Location.context';

// @ts-ignore
import MapPinFillIcon from '@assets/icons/screens/home/map-pin-fill.svg';
import {deviceColors} from '@lib/colors/device';
import {dark} from '@lib/colors/theme';

const AlertMap = ({selectedIndex}: {selectedIndex: number}) => {
  const {location}: any = useContext(LocationContext);

  let pointAnnotationComponents: any[] = [];

  location.forEach((element: any, index: number) => {
    pointAnnotationComponents.push(
      <PointAnnotation
        coordinate={[element.payload.longitude, element.payload.latitude]}
        id={index.toString()}
        key={element.id + 'Pin'}>
        <MapPinFillIcon
          width={25}
          height={25}
          color={Object.values(deviceColors)[index]}
        />
      </PointAnnotation>,
    );

    pointAnnotationComponents.push(
      <PointAnnotation
        coordinate={[element.payload.longitude, element.payload.latitude]}
        id={index.toString()}
        key={element.id + 'Zone'}>
        <View style={styles.safeZone}></View>
      </PointAnnotation>,
    );
  });

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        style={styles.map}>
        {pointAnnotationComponents}
        <Camera
          centerCoordinate={[
            location[selectedIndex].payload.longitude,
            location[selectedIndex].payload.latitude,
          ]}
          zoomLevel={17}
        />
      </Mapbox.MapView>
    </View>
  );
};

export default AlertMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  map: {
    flex: 0.9,
    borderRadius: 20,
    overflow: 'hidden',
  },

  safeZone: {
    backgroundColor: 'rgba(148, 226, 213, 0.3)',
    opacity: 0.2,
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: '100%',
    borderColor: 'black',
    zIndex: -99,
  },
});
