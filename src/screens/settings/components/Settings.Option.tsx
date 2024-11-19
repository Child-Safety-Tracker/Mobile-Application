import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {dark} from '../../../../lib/colors/theme';
import {fontSize} from '../../../../lib/fontSize';

import EarthIconLine from '@assets/icons/screens/settings/earth-line.svg';

const SettingsOption = ({label, value}: {label: string; value: string}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <EarthIconLine width={20} height={20} fill={dark.colors.text.hex} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsOption;

const styles = StyleSheet.create({
  container: {
    height: 55,
    paddingLeft: (55 - 35) / 2, // Equal padding for top, bottom and left of the inner icon
    borderRadius: 10,
    backgroundColor: dark.colors.base.hex,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    height: 35,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark.colors.mantle.hex,
  },

  textContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
  },

  label: {
    color: dark.colors.text.hex,
    fontSize: fontSize.text.medium,
    lineHeight: fontSize.text.medium,
  },

  value: {
    color: dark.colors.text.hex,
    fontSize: fontSize.text.smallMedium,
    opacity: 0.5,
  },
});
