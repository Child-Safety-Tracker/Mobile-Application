import React, {useContext} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet} from 'react-native';

import {DeviceContext} from '../../../context/Device.context';

import {dark} from '@lib/colors/theme';
import {deviceColors} from '@lib/colors/device';

// @ts-ignore
import ArrowUpIconFill from '@assets/icons/screens/alert/arrow-up-fill.svg';
// @ts-ignore
import ArrowDownIconFill from '@assets/icons/screens/alert/arrow-down-fill.svg';
// @ts-ignore
import MapIconLine from '@assets/icons/screens/alert/map-pin-line.svg';


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
];

const FindDeviceSelection = ({updateIndex} : {updateIndex: any}) => {
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
      data={trimmedDevice}
      value={trimmedDevice[0]}
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

export default FindDeviceSelection;

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
