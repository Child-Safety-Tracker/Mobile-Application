import React from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import AlertDevice from './Alert.Device';

import {dark} from '@lib/colors/theme';

import MapIconLine from '@assets/icons/screens/alert/map-pin-line.svg';

const devices = [
  {
    label: 'Device 1',
    value: 'Device 1',
  },
  {
    label: 'Device 2',
    value: 'Device 2',
  },
  {
    label: 'Device 3',
    value: 'Device 3',
  },
];

const AlertDeviceSelection = () => {
  const [value, setValue] = React.useState('');
  const [isFocused, setIsFocused] = React.useState();

  return (
    <Dropdown
      style={{
        backgroundColor: dark.colors.base.hex,
        borderRadius: 10,
        paddingHorizontal: 20,
        flex: 0.5,
      }}
      containerStyle={{
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: dark.colors.surface0.hex,
      }}
      itemContainerStyle={{
        borderRadius: 10,
      }}
      itemTextStyle={{
        paddingLeft: 10,
        color: dark.colors.text.hex,
      }}
      activeColor={dark.colors.base.hex}
      selectedTextStyle={{paddingLeft: 10, color: dark.colors.text.hex}}
      placeholderStyle={{paddingLeft: 10, color: dark.colors.text.hex}}
      data={devices}
      value={devices[0]}
      labelField={'label'}
      valueField={'value'}
      renderLeftIcon={() => (
        <MapIconLine width={20} height={20} fill={dark.colors.green.hex} />
      )}
      onChange={item => setValue(item.value)}
    />
  );
};

export default AlertDeviceSelection;
