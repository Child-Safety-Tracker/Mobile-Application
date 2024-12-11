import React, {useCallback, useContext, useState} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import HomeDeviceInfo from './Home.DeviceInfo';
import {deviceColors} from '@lib/colors/device';

import {DeviceContext} from '../../../context/device.context';
import {LocationContext} from '../../../context/location.context';

const devicesInfo = [
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

const Separator = () => <View style={{height: 12}} />;

const HomeDeviceInfoList = () => {
  const {device, selectedDevice, setSelectedDevice}: any =
    useContext(DeviceContext);
  const {sendLocationRequest}: any = useContext(LocationContext);

  const enabledDevice = device.filter((element: any) => {
    return element.enabled === true;
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    sendLocationRequest();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [sendLocationRequest]);

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={enabledDevice!}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={0}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => setSelectedDevice(index)}>
              <HomeDeviceInfo
                deviceName={devicesInfo[index].deviceName}
                deviceColor={Object.values(deviceColors)[index] as string}
                selected={index === selectedDevice}
                selectedIndex={index}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HomeDeviceInfoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
