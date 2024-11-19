import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {dark} from '@lib/colors/theme';

import SettingsUserInfo from './components/Settings.UserInfo';
import SettingsOption from './components/Settings.Option';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <SettingsUserInfo />
      </View>
      <SettingsOption label={'Language'} value={'English'} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: dark.colors.crust.hex,
  },

  userInfoWrapper: {
    flex: 0.45,
  },
});
