import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import Device from './components/Device';
import DeviceManagementHeading from './components/DeviceManagement.Heading'

import {dark} from '@lib/colors/theme';
import {deviceColors} from '@lib/colors/device';

const devices = [
  {
    id: 1,
    deviceName: 'Device 1',
  },
  {
    id: 2,
    deviceName: 'Device 2',
  },
  {
    id: 3,
    deviceName: 'Device 3',
  },
];

const Separator = () => <View style={{height: 10}} />;

const DeviceManagementScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.deviceManagementHeadingWrapper}>
        <DeviceManagementHeading />
      </View>
      <View
        style={{
          flex: 0.9,
        }}>
        <FlatList
          data={devices}
          showsVerticalScrollIndicator={false}
          initialScrollIndex={0}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={Separator}
          renderItem={({item, index}) => (
            <Device
              deviceName={item.deviceName}
              deviceColor={Object.values(deviceColors)[index]}
            />
          )}
        />
      </View>
    </View>
  );
};

export default DeviceManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
  },

  deviceManagementHeadingWrapper: {
    flex: 0.1,
  }
});
