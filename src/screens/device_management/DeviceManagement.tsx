import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import Device from './components/DeviceManagement.Device';
import DeviceManagementHeading from './components/DeviceManagement.Heading';

import {dark} from '@lib/colors/theme';
import {deviceColors} from '@lib/colors/device';
import {DeviceContext} from '../../context/Device.context';
import LocationContextProvider from '../../context/Location.context';

const deviceInfo = [
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

const Separator = () => <View style={{height: 15}} />;

const DeviceManagementScreen = () => {
  const {device}: any = useContext(DeviceContext);
  return (
    <LocationContextProvider>
      <View style={styles.container}>
        <View style={styles.deviceManagementHeadingWrapper}>
          <DeviceManagementHeading />
        </View>
        <View
          style={{
            flex: 0.9,
          }}>
          <FlatList
            data={device}
            showsVerticalScrollIndicator={false}
            initialScrollIndex={0}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={Separator}
            renderItem={({item, index}) => (
              <Device
                deviceName={deviceInfo[index].deviceName}
                deviceColor={Object.values(deviceColors)[index]}
                index={index}
              />
            )}
          />
        </View>
        <TouchableOpacity
          style={{
            bottom: 20,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            aspectRatio: 1,
            borderRadius: '100%',
            backgroundColor: dark.colors.teal.hex,
          }}>
          <Text
            style={{
              color: dark.colors.crust.hex,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </LocationContextProvider>
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
  },
});
