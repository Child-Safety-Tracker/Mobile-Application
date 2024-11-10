import React from 'react';
import {StyleSheet, View} from 'react-native';
import {dark} from '@lib/colors/theme';
import AlertHeading from './components/Alert.Heading';

const AlertScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.alertHeadingWrapper}>
        <AlertHeading />
      </View>
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
  },

  alertHeadingWrapper: {
    flex: 0.1,
  },
});
