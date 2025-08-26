import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

const SettingsUserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('@assets/images/test_user/user2.jpeg')}
          />
        </View>
        <View style={styles.separator} />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>Tuan Hung</Text>
        <Text style={styles.email}>thpttrungvuong@gmail.com</Text>
      </View>
    </View>
  );
};

export default SettingsUserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  imageWrapper: {
    flex: 0.8,
    overflow: 'hidden',
    borderRadius: '100%',
    aspectRatio: 1,
  },

  image: {
    flex: 1,
    aspectRatio: 1,
  },

  separator: {
    height: 20,
  },

  userInfoContainer: {
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  username: {
    fontSize: fontSize.heading.medium,
    fontWeight: 'bold',
    color: dark.colors.text.hex,
  },

  email: {
    fontSize: fontSize.text.medium,
    color: dark.colors.text.hex,
    opacity: 0.7,
  },
});
