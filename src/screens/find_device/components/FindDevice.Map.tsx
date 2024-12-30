import React from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera, UserLocation} from '@rnmapbox/maps';

const FindDeviceMap = () => {
  return (
    <View style={styles.container}>
      <Mapbox.MapView
        scaleBarEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        style={styles.map}>
        <UserLocation androidRenderMode={'normal'} />
        <Camera
          followUserLocation={true}
          animationMode={'none'}
          followZoomLevel={17}
        />
      </Mapbox.MapView>
    </View>
  );
};

export default FindDeviceMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
