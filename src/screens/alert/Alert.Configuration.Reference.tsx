import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera} from '@rnmapbox/maps';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';
import {LocationContext} from '../../context/Location.context';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const AlertConfigurationReference = ({route}: any) => {
  const {location, isLoadingLocation}: any = useContext(LocationContext);

  // Get the passed prop
  const {selectedDevice}: any = route.params;

  let coordinates: any[] | undefined;

  // Set the center of Map camera to the selected device
  if (!isLoadingLocation) {
    coordinates = [
      location[selectedDevice].payload.longitude,
      location[selectedDevice].payload.latitude,
    ];
  }

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        style={styles.map}
        scaleBarEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}>
        <Camera
          centerCoordinate={coordinates}
          animationMode={'none'}
          zoomLevel={17}
        />
      </Mapbox.MapView>
    </View>
  );
};

export default AlertConfigurationReference;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
