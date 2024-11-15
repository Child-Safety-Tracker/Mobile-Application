import React from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';

import AlertHeading from './components/Alert.Heading';
import AlertConfiguration from './components/Alert.Configuration';
import AlertMap from './components/Alert.Map';
import AlertDeviceSelection from './components/Alert.DeviceSelection';

import {dark} from '@lib/colors/theme';

// @ts-ignore
import FlagFillIcon from '@assets/icons/screens/alert/flag-fill.svg';
// @ts-ignore
import BoundaryLineIcon from '@assets/icons/screens/alert/boundary-line.svg';

// @ts-ignore
import {OPEN_MAP_PUBLIC_KEY} from '@env';

Mapbox.setAccessToken(OPEN_MAP_PUBLIC_KEY);

const ReferenceIcon = () => (
  <FlagFillIcon width={20} height={20} fill={dark.colors.text.hex} />
);

const BoundaryIcon = () => (
  <BoundaryLineIcon width={20} height={20} fill={dark.colors.text.hex} />
);

const AlertScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.alertHeadingWrapper}>
        <AlertHeading />
      </View>
      <View style={styles.alertConfigurationWrapper}>
        <AlertConfiguration
          icon={<ReferenceIcon />}
          configName={'Reference'}
          configValue1={'16°05\'09.8"N'}
          configValue2={'108°09\'04.5"E'}
        />
        <View style={styles.alertConfigurationSeparator} />
        <AlertConfiguration
          icon={<BoundaryIcon />}
          configName={'Boundary'}
          configValue1={'100m'}
          configValue2={''}
        />
      </View>
      <View style={styles.alertDeviceSelectionWrapper}>
        <AlertDeviceSelection />
      </View>
      <View style={styles.alertMapWrapper}>
        <AlertMap />
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
    flex: 0.15,
    justifyContent: 'center',
  },

  alertMapWrapper: {
    flex: 0.62,
  },
});
