import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import moment from 'moment';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import MapPinIconLine from '@assets/icons/screens/home/map-pin-line.svg';
import {LocationContext} from '../../../context/location.context';

const HomeDeviceInfo = ({
  deviceName,
  deviceColor,
  index,
}: {
  deviceName: string;
  deviceColor: string;
  index: number;
}) => {
  const {location, isLoadingLocation}: any = useContext(LocationContext);

  if (!isLoadingLocation) console.log(location);

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.deviceInfoContainer}>
          <View style={styles.mapPinIconContainer}>
            <MapPinIconLine width={20} height={20} color={deviceColor} />
          </View>
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>{deviceName}</Text>
            <Text style={styles.dateAdded}>Added: 2 months ago</Text>
          </View>
        </View>
        <Text style={styles.lastUpdate}>
          {isLoadingLocation
            ? null
            : moment.unix(location[index].payload.timestamp).fromNow()}
        </Text>
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

  deviceInfoContainer: {
    flexDirection: 'row',
  },

  mapPinIconContainer: {
    padding: 12,
    backgroundColor: dark.colors.mantle.hex,
    borderRadius: 10,
  },

  deviceInfo: {
    marginLeft: 10,
    fontSize: fontSize.text.medium,
  },

  deviceName: {
    color: dark.colors.text.hex,
  },

  dateAdded: {
    marginTop: 2,
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
