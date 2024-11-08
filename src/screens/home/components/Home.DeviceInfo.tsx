import React from 'react';
import {View} from 'react-native';
import {Text} from '@tamagui/core';

import {dark} from '@lib/color';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import MapPinIconLine from '@assets/icons/screens/home/map-pin-line.svg';

import ArrowRightIconLine from '@assets/icons/screens/home/arrow-right-circle-line.svg';

const HomeDeviceInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: dark.colors.base.hex,
        borderRadius: 10,
        padding: 12,
        paddingRight: 20,
      }}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              padding: 12,
              backgroundColor: dark.colors.mantle.hex,
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
      <ArrowRightIconLine width={30} height={30} color={dark.colors.text.hex} />
    </View>
  );
};

export default HomeDeviceInfo;
