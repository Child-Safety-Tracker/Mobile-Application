import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import MapPinIconLine from '@assets/icons/screens/home/map-pin-line.svg';
// @ts-ignore
import ArrowDownFill from '@assets/icons/screens/alert/arrow-down-fill.svg';

const devices = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
  {
    label: 'Option 4',
    value: 'option4',
  },
];

const AlertDeviceSelection = () => {
  const [selectedDevice, setSelectedDevice] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.locationInfoContainer}>
        <View style={styles.mapPinIconContainer}>
          <MapPinIconLine
            width={20}
            height={20}
            color={dark.colors.green.hex}
          />
        </View>
        <View style={styles.locationInfo}>
          <Text style={styles.deviceName}>{'device'}</Text>
          <Text style={styles.deviceLocation}>Location</Text>
        </View>
      </View>
      <ArrowDownFill
        borderWidth={5}
        width={30}
        height={30}
        color={dark.colors.text.hex}
      />
    </View>
  );
};

export default AlertDeviceSelection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: dark.colors.base.hex,
    borderRadius: 10,
    padding: 12,
    paddingRight: 20,
  },

  locationInfoContainer: {
    flexDirection: 'row',
  },

  mapPinIconContainer: {
    padding: 12,
    backgroundColor: dark.colors.mantle.hex,
    borderRadius: 10,
  },

  locationInfo: {
    marginLeft: 10,
    fontSize: fontSize.text.medium,
  },

  deviceName: {
    color: dark.colors.text.hex,
  },

  deviceLocation: {
    color: dark.colors.text.hex,
    opacity: 0.5,
  },

  lastUpdate: {
    marginTop: 5,
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
    opacity: 0.5,
  },
});
