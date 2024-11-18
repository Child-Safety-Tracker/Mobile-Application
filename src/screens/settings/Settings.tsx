import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '../../../lib/fontSize';

import SettingsUserInfo from './components/Settings.UserInfo';

import EarthIconLine from '@assets/icons/screens/settings/earth-line.svg';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <SettingsUserInfo />
      </View>
      <View
        style={{
          height: 55,
          paddingLeft: (55 - 35) / 2, // Equal padding for top, bottom and left of the inner icon
          borderRadius: 10,
          backgroundColor: dark.colors.base.hex,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 35,
            aspectRatio: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: dark.colors.mantle.hex,
          }}>
          <EarthIconLine width={20} height={20} fill={dark.colors.text.hex} />
        </View>
        <View
          style={{
            paddingLeft: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: dark.colors.text.hex,
              fontSize: fontSize.text.medium,
              lineHeight: fontSize.text.medium,
            }}>
            Language
          </Text>
          <Text
            style={{
              color: dark.colors.text.hex,
              fontSize: fontSize.text.smallMedium,
              opacity: 0.5,
            }}>
            English
          </Text>
        </View>
      </View>
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
