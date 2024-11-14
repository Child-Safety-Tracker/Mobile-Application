import React, {useState} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import MapPinIconLine from '@assets/icons/screens/home/map-pin-line.svg';

// @ts-ignore
import ArrowRightIconLine from '@assets/icons/screens/home/arrow-right-circle-line.svg';

const HomeDeviceInfo = ({
  deviceName,
  deviceColor,
}: {
  deviceName: string;
  deviceColor: string;
}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.locationInfoContainer}>
          <View style={styles.mapPinIconContainer}>
            <MapPinIconLine width={20} height={20} color={deviceColor} />
          </View>
          <View style={styles.locationInfo}>
            <Text style={styles.deviceName}>{deviceName}</Text>
            <Text style={styles.deviceLocation}>Added on: </Text>
          </View>
        </View>
        <Text style={styles.lastUpdate}>Last Update: 5 min ago</Text>
      </View>
      <Switch
        value={isEnabled}
        trackColor={{
          false: dark.colors.surface0.hex,
          true: dark.colors.surface1.hex,
        }}
        thumbColor={isEnabled ? dark.colors.teal.hex : dark.colors.text.hex}
        onValueChange={() => setIsEnabled(!isEnabled)}
      />
    </View>
  );
};

export default HomeDeviceInfo;

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
    marginTop: 3,
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
    opacity: 0.5,
  },
});
