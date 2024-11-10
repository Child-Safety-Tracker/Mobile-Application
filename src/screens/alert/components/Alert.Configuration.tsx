import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import FlagFillIcon from '@assets/icons/screens/alert/flag-fill.svg';
// @ts-ignore
import ArrowRightIcon from '@assets/icons/screens/alert/arrow-right-line.svg';

const AlertConfiguration = ({
  icon,
  configName,
  configValue1,
  configValue2,
}: {
  icon: any;
  configName: string;
  configValue1: string;
  configValue2: string;
}) => {
  return (
    <View style={styles.container}>
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
    </View>
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
