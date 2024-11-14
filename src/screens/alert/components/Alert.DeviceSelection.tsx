import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {dark} from '@lib/colors/theme';

// @ts-ignore
import ArrowUpIconFill from '@assets/icons/screens/alert/arrow-up-fill.svg';
// @ts-ignore
import ArrowDownIconFill from '@assets/icons/screens/alert/arrow-down-fill.svg';
// @ts-ignore
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
      data={devices}
      value={devices[0]}
      labelField={'label'}
      valueField={'value'}
      renderLeftIcon={() => (
        <MapIconLine width={20} height={20} fill={dark.colors.green.hex} />
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
        setValue(item.value);
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
