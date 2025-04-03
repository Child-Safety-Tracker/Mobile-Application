import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {dark} from '@lib/colors/theme';

// @ts-ignore
import ArrowUpIconFill from '@assets/icons/screens/alert/arrow-up-fill.svg';
// @ts-ignore
import ArrowDownIconFill from '@assets/icons/screens/alert/arrow-down-fill.svg';
// @ts-ignore
import MapIconLine from '@assets/icons/screens/alert/map-pin-line.svg';
import {DeviceContext} from '../../../context/Device.context';
import {deviceColors} from '../../../../lib/colors/device';

let devices = [
  {
    label: 'Device 1',
    value: 0,
  },
  {
    label: 'Device 2',
    value: 1,
  },
  {
    label: 'Device 3',
    value: 2,
  },
  {
    label: 'Device 4',
    value: 4,
  },
  {
    label: 'Device 5',
    value: 5,
  },
];

const AlertDeviceSelection = ({updateIndex}: any) => {
  const {device}: any = useContext(DeviceContext);
  // Trim the menu elements
  const trimmedDevice = devices.slice(0, device.length);

  const [value, setValue] = React.useState(trimmedDevice[0]);

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <Dropdown
      style={styles.container}
      containerStyle={styles.listContainer}
      itemContainerStyle={styles.itemContainer}
      itemTextStyle={styles.text}
      activeColor={dark.colors.base.hex}
      selectedTextStyle={styles.text}
      placeholderStyle={styles.text}
      data={trimmedDevice!}
      value={value}
      labelField={'label'}
      valueField={'value'}
      renderLeftIcon={() => (
        <MapIconLine
          width={20}
          height={20}
          fill={Object.values(deviceColors)[value.value]}
        />
      )}
      renderRightIcon={() =>
        isFocused ? (
          <ArrowUpIconFill width={20} height={20} fill={dark.colors.text.hex} />
        ) : (
          <ArrowDownIconFill
            width={20}
            height={20}
            fill={dark.colors.text.hex}
          />
        )
      }
      onChange={item => {
        setValue(item);
        updateIndex(item.value);
        setIsFocused(false);
      }}
      onFocus={() => setIsFocused(true)}
    />
  );
};

export default AlertDeviceSelection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.colors.base.hex,
    borderRadius: 10,
    paddingHorizontal: 20,
    flex: 0.6,
  },

  listContainer: {
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: dark.colors.surface0.hex,
  },

  itemContainer: {
    borderRadius: 10,
  },

  text: {
    paddingLeft: 10,
    color: dark.colors.text.hex,
  },
});
