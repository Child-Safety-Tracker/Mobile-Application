import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '../../../lib/fontSize';

import SettingsUserInfo from './components/Settings.UserInfo';
import SettingsOption from './components/Settings.Option';
import Separator from '../../components/Separator';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <SettingsUserInfo />
      </View>
      <View style={styles.optionsWrapper}>
        <SettingsOption label={'Language'} value={'English'} />
        <Separator height={15} />
        <Text
          style={{
            color: dark.colors.text.hex,
            fontSize: fontSize.heading.small,
            lineHeight: fontSize.heading.small,
            fontWeight: 'bold',
          }}>
          User
        </Text>
        <Separator height={15} />
        <SettingsOption label={'Username'} value={'Tuan Kiet'} />
        <Separator height={20} />
        <SettingsOption label={'Email'} value={'user@gmail.com'} />
        <Separator height={20} />
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

  optionsWrapper: {
    flex: 0.55,
  },
});
