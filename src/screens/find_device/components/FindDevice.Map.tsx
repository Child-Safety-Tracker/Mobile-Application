import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {
  Camera,
  Location,
  PointAnnotation,
  UserLocation,
} from '@rnmapbox/maps';
import {LocationContext} from '../../../context/Location.context';
import {deviceColorsDark} from '@lib/colors/device';

//@ts-ignore
import ArrowIcon from '@assets/icons/screens/find_device/arrow.svg';
//@ts-ignore
import MapPinFillIcon from '@assets/icons/screens/find_device/map-pin-fill.svg';
import {dark} from '../../../../lib/colors/theme';

const FindDeviceMap = ({selectedIndex}: {selectedIndex: number}) => {
  const {location}: any = useContext(LocationContext);
  const selectedDeviceLocation = location[selectedIndex].payload;

  const [userLocation, setUserLocation] = useState<Location>();

  // The location of the direction arrow to make it around the user location
  let arrowLocation;
  if (typeof userLocation !== 'undefined') {
    const userLocationLongitude = userLocation.coords.longitude;
    const userLocationLatitude = userLocation.coords.latitude;
    const X = selectedDeviceLocation.longitude - userLocation.coords.longitude;
    const Y = selectedDeviceLocation.latitude - userLocation.coords.latitude;
    const distance = Math.sqrt(X * X + Y * Y) * 10000;

    // The ratio between the distance from user location to device and from user location to direction arrow
    const ratio = distance / 0.0004;

    arrowLocation = [
      userLocationLongitude + userLocationLatitude / ratio,
      userLocationLatitude + userLocationLatitude / ratio,
    ];
    console.log(arrowLocation);
  }

  console.log(arrowLocation);

  return (
    <View style={styles.container}>
      <Mapbox.MapView
        scaleBarEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}
        style={styles.map}>
        <UserLocation
          androidRenderMode={'normal'}
          onUpdate={updateLocation => setUserLocation(updateLocation)}
        />
        <PointAnnotation
          coordinate={[
            selectedDeviceLocation.longitude,
            selectedDeviceLocation.latitude,
          ]}
          id={'Device Location'}>
          <MapPinFillIcon
            width={25}
            height={25}
            color={Object.values(deviceColorsDark)[selectedIndex]}
          />
        </PointAnnotation>
        ,
        {typeof arrowLocation === 'undefined' ? null : (
          <PointAnnotation id={'Direction Arrow'} coordinate={arrowLocation}>
            <ArrowIcon width={80} height={80} color={dark.colors.crust.hex} />
          </PointAnnotation>
        )}
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
