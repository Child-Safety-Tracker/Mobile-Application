import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// @ts-ignore
import NotificationIconLine from '@assets/icons/screens/home/notification-line.svg';
import {fontSize} from '@lib/fontSize';
import {dark} from '@lib/colors/theme';

let userName = 'Tuan Hung';

const HomeHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Hi, <Text style={styles.userName}>{userName}</Text>
      </Text>
      <View style={styles.notificationContainer}>
        <NotificationIconLine
          width={25}
          height={25}
          color={dark.colors.text.hex}
        />
      </View>
    </View>
  );
};

export default HomeHeading;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcome: {
    fontSize: fontSize.heading.large,
    fontWeight: 'bold',
    color: dark.colors.text.hex,
  },

  userName: {
    color: dark.colors.teal.hex,
  },

  notificationContainer: {
    padding: 10,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: dark.colors.surface0.hex,
    backgroundColor: dark.colors.mantle.hex,
  },
});
