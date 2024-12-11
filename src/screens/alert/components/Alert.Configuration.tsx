import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import ArrowRightIcon from '@assets/icons/screens/alert/arrow-right-line.svg';
import {useNavigation} from '@react-navigation/native';
import navigator from '../../../navigator/Navigator';

const AlertConfiguration = ({
  icon,
  selectedDevice,
  configName,
  configValue1,
  configValue2,
}: {
  icon: any;
  selectedDevice: number;
  configName: string;
  configValue1: string;
  configValue2: string;
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        configName === 'Reference'
          ? navigation.navigate('Alert Reference' as never, {selectedDevice: selectedDevice} as never)
          : navigation.navigate('Alert Boundary' as never, {selectedDevice: selectedDevice} as never);
      }}>
      <View style={styles.headingComponentsWrapper}>
        <View style={styles.headingWrapper}>
          {icon}
          <Text style={styles.heading}>{configName}</Text>
        </View>
        <ArrowRightIcon width={20} height={20} fill={dark.colors.text.hex} />
      </View>
      <View>
        <Text style={styles.info}>{configValue1}</Text>
        <Text style={styles.info}>{configValue2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AlertConfiguration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 12,
    backgroundColor: dark.colors.base.hex,
  },

  headingComponentsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headingWrapper: {
    flexDirection: 'row',
  },

  heading: {
    marginLeft: 8,
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
  },

  info: {
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
    opacity: 0.5,
  },
});
