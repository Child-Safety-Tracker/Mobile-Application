import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Sound from 'react-native-sound';

import AlertHeading from './components/Alert.Heading';
import AlertConfiguration from './components/Alert.Configuration';
import AlertMap from './components/Alert.Map';
import AlertDeviceSelection from './components/Alert.DeviceSelection';

import {dark} from '@lib/colors/theme';

// @ts-ignore
import FlagFillIcon from '@assets/icons/screens/alert/flag-fill.svg';
// @ts-ignore
import BoundaryLineIcon from '@assets/icons/screens/alert/boundary-line.svg';
import {AlertContext} from '../../context/Alert.context';
import {LocationContext} from '../../context/Location.context';

// Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file
const alertSound = new Sound('siren_alert.sound', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('[Alert] Failed to load the sound');
    console.log(error);
  }

  console.log('[Alert] Load sound successfully');
});

const AlertScreen = () => {
  const {pressedCoordinate, safeZoneRadius}: any = useContext(AlertContext);
  const {location}: any = useContext(LocationContext);

  const [selectedIndex, setSelectedIndex] = useState(0);

  if (pressedCoordinate.length !== 0) {
    const X = location[selectedIndex].payload.longitude - pressedCoordinate[0];
    const Y = location[selectedIndex].payload.latitude - pressedCoordinate[1];

    const distance = Math.sqrt(X * X + Y * Y) * 10000;

    if (
      pressedCoordinate.length !== 0 &&
      safeZoneRadius !== 0 &&
      distance > safeZoneRadius
    ) {
      console.log(distance);
      console.log('Out of zone');

      alertSound.play(success => {
        if (success) {
          console.log('[Alert] Successfully play the alert sound');
        } else {
          console.log('[Alert] Failed to play the alert sound');
        }
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.alertHeadingWrapper}>
        <AlertHeading />
      </View>
      <View style={styles.alertConfigurationWrapper}>
        <AlertConfiguration
          icon={
            <FlagFillIcon width={20} height={20} fill={dark.colors.text.hex} />
          }
          selectedDevice={selectedIndex}
          configName={'Reference'}
          configValue1={
            pressedCoordinate.length !== 0
              ? pressedCoordinate[0].toFixed(6)
              : null
          }
          configValue2={
            pressedCoordinate.length !== 0
              ? pressedCoordinate[1].toFixed(6)
              : null
          }
        />
        <View style={styles.alertConfigurationSeparator} />
        <AlertConfiguration
          icon={
            <BoundaryLineIcon
              width={20}
              height={20}
              fill={dark.colors.text.hex}
            />
          }
          selectedDevice={selectedIndex}
          configName={'Boundary'}
          configValue1={safeZoneRadius}
          configValue2={''}
        />
      </View>
      <View style={styles.alertDeviceSelectionWrapper}>
        <AlertDeviceSelection updateIndex={setSelectedIndex} />
      </View>
      <View style={styles.alertMapWrapper}>
        <AlertMap selectedIndex={selectedIndex} />
      </View>
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
  },

  alertHeadingWrapper: {
    flex: 0.1,
  },

  alertConfigurationWrapper: {
    flex: 0.13,
    flexDirection: 'row',
  },

  alertConfigurationSeparator: {
    width: 20,
  },

  alertDeviceSelectionWrapper: {
    flex: 0.12,
    justifyContent: 'center',
  },

  alertMapWrapper: {
    flex: 0.65,
  },
});
