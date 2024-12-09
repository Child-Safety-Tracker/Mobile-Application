import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Mapbox, {Camera} from '@rnmapbox/maps';
import {LocationContext} from '../../../context/location.context';

const AlertMap = ({index}: {index: number}) => {
  const {location}: any = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        style={styles.map}>
        <Camera
          centerCoordinate={[
            location[index].payload.longitude,
            location[index].payload.latitude,
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
});
