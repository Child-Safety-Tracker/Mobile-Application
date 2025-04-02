import React, {useContext, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

import HomeHeading from './components/Home.Heading';
import HomeMap from './components/Home.Map';

// @ts-ignore
import {dark} from '@lib/colors/theme.ts';
// @ts-ignore
// @ts-ignore
import {fontSize} from '@lib/fontSize';
import {DeviceContext} from '../../context/Device.context';
import HomeDeviceInfoList from './components/Home.DeviceInfoList';
import Location7DaysContextProvider from '../../context/Location7Days.context';

let deviceNum = 2;
const HomeScreen = () => {
  const {isLoadingDevice}: any = useContext(DeviceContext);
  const [isEnabled, setIsEnabled]: any = useState();

  return isLoadingDevice ? null : (
    <View style={styles.container}>
      <View style={styles.homeHeadingWrapper}>
        <HomeHeading />
      </View>
      <View style={styles.homeMapWrapper}>
        <Location7DaysContextProvider>
          <HomeMap showHistory={isEnabled} />
        </Location7DaysContextProvider>
      </View>
      <View style={styles.deviceInfoContainer}>
        <View style={styles.deviceInfoHeaderContainer}>
          <Text style={styles.deviceInfoHeader}>
            Devices - <Text>{deviceNum}</Text>
          </Text>
          <View style={styles.historyMovementContainer}>
            <Text style={styles.historyMovementText}>History</Text>

            <Switch
              value={isEnabled}
              trackColor={{
                false: dark.colors.surface0.hex,
                true: dark.colors.surface1.hex,
              }}
              thumbColor={
                isEnabled ? dark.colors.teal.hex : dark.colors.text.hex
              }
              onValueChange={() => {
                setIsEnabled(!isEnabled);
              }}
            />
          </View>
        </View>
        <View style={styles.deviceInfoList}>
          <HomeDeviceInfoList />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
    flex: 1,
    flexDirection: 'column',
  },

  homeHeadingWrapper: {
    flex: 0.1,
  },

  homeMapWrapper: {
    flex: 0.5,
  },

  deviceInfoContainer: {
    flex: 0.4,
  },

  deviceInfoHeaderContainer: {
    flex: 0.15,
    flexDirection: 'row',
  },

  deviceInfoHeader: {
    color: dark.colors.text.hex,
    fontSize: fontSize.heading.smallMedium,
    lineHeight: fontSize.heading.smallMedium,
    fontWeight: 'bold',
    flex: 1,
    textAlignVertical: 'center',
  },

  historyMovementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  historyMovementText: {
    color: dark.colors.text.hex,
    fontSize: fontSize.text.mediumLarge,
    lineHeight: fontSize.text.mediumLarge,
    paddingRight: 10,
  },

  deviceInfoList: {
    flex: 0.85,
  },
});
