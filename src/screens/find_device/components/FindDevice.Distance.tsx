import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LocationContext} from '../../../context/Location.context';
import Geolocation from '@react-native-community/geolocation';
import {dark} from '../../../../lib/colors/theme';
import {fontSize} from '../../../../lib/fontSize';

const FindDeviceDistance = ({selectedIndex}: {selectedIndex: number}) => {
  const {location}: any = useContext(LocationContext);
  const [distance, setDistance] = useState('');

  Geolocation.setRNConfiguration({
    skipPermissionRequests: true,
    locationProvider: 'android',
  });

  Geolocation.getCurrentPosition(
    userLocation => {
      console.log(userLocation);

      const selectedDeviceLocation = location[selectedIndex].payload;

      const X =
        selectedDeviceLocation.longitude - userLocation.coords.longitude;
      const Y = selectedDeviceLocation.latitude - userLocation.coords.latitude;

      const tempDistance = Math.sqrt(X * X + Y * Y) * 100000;

      if (tempDistance > 1000) {
        setDistance(`${tempDistance.toFixed(1)} km`);
      }
      else {
        setDistance(`${tempDistance.toFixed(1)} m`);
      }
    },
    error => {
      console.log(error);
    },
    {
      timeout: 5000,
      maximumAge: 0,
      enableHighAccuracy: false,
    },
  );
  return (
    <View style={styles.container}>
      <Text style={styles.distanceText}>{distance}</Text>
    </View>
  );
};

export default FindDeviceDistance;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: dark.colors.base.hex,
    width: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  distanceText: {
    fontSize: fontSize.text.large,
    color: dark.colors.text.hex,
  },
});
