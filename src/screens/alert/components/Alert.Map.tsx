import React from 'react';
import {View, StyleSheet} from 'react-native';
import Mapbox from '@rnmapbox/maps';

const AlertMap = () => {
  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} />
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
