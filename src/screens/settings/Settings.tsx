import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.35,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.7,
            overflow: 'hidden',
            borderRadius: '100%',
            aspectRatio: 1,
          }}>
          <Image
            style={{
              flex: 1,
              aspectRatio: 1,
            }}
            source={require('@assets/images/test_user/user.jpeg')}
          />
        </View>
        <View
          style={{
            height: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize.heading.medium,
            fontWeight: 'bold',
            color: dark.colors.text.hex,
          }}>
          Tuan Kiet
        </Text>
        <Text
          style={{
            fontSize: fontSize.text.medium,
            color: dark.colors.text.hex,
            opacity: 0.7,
          }}>
          user@gmail.com
        </Text>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.colors.crust.hex,
  },
});
