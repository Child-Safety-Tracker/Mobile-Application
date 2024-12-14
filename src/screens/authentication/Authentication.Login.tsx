import React from 'react';
import {View, StyleSheet} from 'react-native';
import {dark} from '../../../lib/colors/theme';

const AuthenticationLogin = () => {
  return <View style={styles.container}></View>;
};

export default AuthenticationLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.colors.crust.hex,
  },
});
