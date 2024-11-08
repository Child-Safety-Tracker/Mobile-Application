import React from 'react';
import {View, StyleSheet} from 'react-native';

import {dark} from '@lib/color.ts';

import HomeHeading from './components/Home.Heading';
import HomeMap from './components/Home.Map';
import {Text} from '@tamagui/core';

import {fontSize} from '@lib/fontSize';

// @ts-ignore
import MapPinIconLine from '@assets/icons/screens/home/map-pin-line.svg';

let deviceNum = 2;
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeading />
      <HomeMap />
      <View
        style={{
          flex: 0.35,
        }}>
        <Text
          style={{
            color: dark.colors.text.hex,
            fontSize: fontSize.heading.smallMedium,
            fontWeight: 'bold',
          }}>
          Devices - <Text>{deviceNum}</Text>
        </Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                padding: 12,
                backgroundColor: dark.colors.base.hex,
                borderRadius: 10,
              }}>
              <MapPinIconLine
                width={20}
                height={20}
                color={dark.colors.green.hex}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: fontSize.text.medium,
                  color: dark.colors.text.hex,
                }}>
                Device name
              </Text>
              <Text
                style={{
                  fontSize: fontSize.text.medium,
                  color: dark.colors.text.hex,
                  opacity: 0.5,
                }}>
                Location
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: fontSize.text.medium,
              color: dark.colors.text.hex,
              opacity: 0.5,
            }}>
            Last Update: 5 min ago
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
    flex: 1,
    flexDirection: 'column',
  },
});
