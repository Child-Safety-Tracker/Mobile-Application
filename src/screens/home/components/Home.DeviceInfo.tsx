import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import moment from 'moment';

// @ts-ignore
import {dark} from '@lib/colors/theme';
// @ts-ignore
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import MapPinIconLine from '@assets/icons/screens/home/map-pin-line.svg';

// @ts-ignore
import Circle from '@assets/icons/screens/home/circle-line.svg';
// @ts-ignore
import SelectedCircle from '@assets/icons/screens/home/circle-dot.svg';
import {LocationContext} from '../../../context/location.context';

const HomeDeviceInfo = ({
  deviceName,
  deviceColor,
  selected,
  selectedIndex,
}: {
  deviceName: string;
  deviceColor: string;
  selected: boolean;
  selectedIndex: number;
}) => {
  const {location, isLoadingLocation}: any = useContext(LocationContext);
  if (!isLoadingLocation) {
    console.log(location[selectedIndex].payload);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.locationInfoContainer}>
          <View style={styles.mapPinIconContainer}>
            <MapPinIconLine width={20} height={20} color={deviceColor} />
          </View>
          <View style={styles.locationInfo}>
            <Text style={styles.deviceName}>{deviceName}</Text>
            <Text style={styles.deviceLocation}>
              {isLoadingLocation
                ? null
                : location[selectedIndex].payload.longitude.toString() +
                  ', ' +
                  location[selectedIndex].payload.latitude.toString()}
            </Text>
          </View>
        </View>
        <Text style={styles.lastUpdate}>
          {isLoadingLocation
            ? null
            : moment.unix(location[selectedIndex].payload.timestamp).fromNow()}
        </Text>
      </View>
      {selected ? (
        <SelectedCircle
          borderWidth={5}
          width={25}
          height={25}
          color={dark.colors.teal.hex}
        />
      ) : (
        <Circle
          borderWidth={5}
          width={25}
          height={25}
          color={dark.colors.text.hex}
        />
      )}
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
    marginTop: 5,
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
    opacity: 0.5,
  },
});
