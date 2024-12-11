import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Mapbox, {Camera, PointAnnotation} from '@rnmapbox/maps';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';
import {LocationContext} from '../../context/Location.context';
import {fontSize} from '../../../lib/fontSize';
import {dark} from '../../../lib/colors/theme';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const AlertConfigurationReference = ({route}: any) => {
  const [isPressed, setIsPressed] = useState(false);
  const {location, isLoadingLocation}: any = useContext(LocationContext);
  const [pressedCoordinates, setPressedCoordinates] = useState([]);

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

  // @ts-ignore
  // @ts-ignore
  return (
    <View style={styles.container}>
      <View
        style={{
          bottom: 0,
          height: '15%',
          width: '100%',
          position: 'absolute',
          zIndex: 999,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: dark.colors.base.hex,
            width: '70%',
            height: '40%',
            borderRadius: 100,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: fontSize.text.mediumLarge,
              color: dark.colors.text.hex,
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
      <Mapbox.MapView
        onPress={(event: any) => {
          const {geometry} = event;
          setIsPressed(true);
          setPressedCoordinates(geometry.coordinates);
        }}
        style={styles.map}
        scaleBarEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        attributionEnabled={false}>
        {isPressed ? (
          // Ignore the complaint about missing children prop to render the default annotation
          // @ts-ignore
          <PointAnnotation
            id={'Pressed point'}
            coordinate={pressedCoordinates!}
          />
        ) : null}
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
