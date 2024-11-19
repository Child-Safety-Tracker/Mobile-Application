import React from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '../../../lib/fontSize';

import SettingsUserInfo from './components/Settings.UserInfo';
import SettingsOption from './components/Settings.Option';
import Separator from '../../components/Separator';

// @ts-ignore
import EarthIconLine from '@assets/icons/screens/settings/earth-line.svg';
// @ts-ignore
import PencilIcon from '@assets/icons/screens/settings/pencil-fill.svg';
// @ts-ignore
import UserIcon from '@assets/icons/screens/settings/user-fill.svg';
import NotificationIcon from '@assets/icons/screens/settings/notification-fill.svg';

const SettingScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <SettingsUserInfo />
      </View>
      <View style={styles.optionsWrapper}>
        <SettingsOption
          icon={
            <EarthIconLine width={20} height={20} fill={dark.colors.text.hex} />
          }
          label={'Language'}
          value={'English'}
        />
        <Separator height={15} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: dark.colors.text.hex,
              fontSize: fontSize.heading.small,
              lineHeight: fontSize.heading.small,
              fontWeight: 'bold',
            }}>
            Notification
          </Text>
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
        <Separator height={15} />
        <SettingsOption
          icon={
            <NotificationIcon
              width={20}
              height={20}
              fill={dark.colors.text.hex}
            />
          }
          label={'Customization'}
          value={'Phone notification'}
        />
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
        <SettingsOption
          icon={<UserIcon width={20} height={20} fill={dark.colors.text.hex} />}
          label={'Username'}
          value={'Tuan Kiet'}
        />
        <Separator height={20} />
        <SettingsOption
          icon={
            <PencilIcon width={20} height={20} fill={dark.colors.text.hex} />
          }
          label={'Email'}
          value={'user@gmail.com'}
        />
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
