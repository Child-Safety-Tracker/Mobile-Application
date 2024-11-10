import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import FlagFillIcon from '@assets/icons/screens/alert/flag-fill.svg';
// @ts-ignore
import ArrowRightIcon from '@assets/icons/screens/alert/arrow-right-line.svg';

const AlertConfiguration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.componentsWrapper}>
        <View style={styles.headingWrapper}>
          <FlagFillIcon width={20} height={20} fill={dark.colors.text.hex} />
          <Text style={styles.heading}>Reference</Text>
        </View>
        <ArrowRightIcon width={20} height={20} fill={dark.colors.text.hex} />
      </View>
      <Text style={styles.info}>16°05'09.8"N</Text>
      <Text style={styles.info}>108°09'04.5"E</Text>
    </View>
  );
};

export default AlertConfiguration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: dark.colors.base.hex,
  },

  componentsWrapper: {
    flexDirection: 'row',
  },

  headingWrapper: {
    flexDirection: 'row',
  },

  heading: {
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
  },

  info: {
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
    opacity: 0.5,
  },
});
