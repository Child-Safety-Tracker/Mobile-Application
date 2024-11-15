import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

import SettingsUserInfo from './components/Settings.UserInfo';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <SettingsUserInfo />
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.colors.crust.hex,
  },

  userInfoWrapper: {
    flex: 0.45,
  }
});
