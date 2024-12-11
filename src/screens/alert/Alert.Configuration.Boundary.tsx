import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {dark} from '../../../lib/colors/theme';
import {fontSize} from '../../../lib/fontSize';
import {Dropdown} from 'react-native-element-dropdown';

const unitSelection = [
  {
    label: 'Meters',
    value: 'Meters',
  },
  {
    label: 'Kilometers',
    value: 'Kilometers',
  },
];

const AlerConfigurationBoundary = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Boundary</Text>
      <TextInput style={styles.textInput} value={text} onChangeText={setText} />
      <Dropdown
        style={styles.dropDown}
        selectedTextStyle={styles.dropDownSelectedText}
        placeholderStyle={styles.dropDownPlaceholder}
        itemContainerStyle={styles.dropDownItemContainer}
        containerStyle={styles.dropDownContainer}
        itemTextStyle={styles.dropDownItemText}
        activeColor={dark.colors.base.hex}
        data={unitSelection}
        labelField={'label'}
        valueField={'value'}
        onChange={(item: any) => {
          setValue(item);
        }}
      />
    </View>
  );
};

export default AlerConfigurationBoundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
  },
  heading: {
    textAlignVertical: 'center',
    flex: 0.1,
    fontSize: fontSize.heading.large,
    fontWeight: 'bold',
    color: dark.colors.text.hex,
  },

  textInput: {
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: dark.colors.surface1.hex,
    flex: 0.05,
    backgroundColor: dark.colors.surface0.hex,
  },

  dropDown: {
    width: '30%',
    flex: 0.075,
    justifyContent: 'center',
  },
  dropDownSelectedText: {
    color: dark.colors.text.hex,
    fontSize: 15,
  },
  dropDownPlaceholder: {
    textAlignVertical: 'center',
    color: dark.colors.text.hex,
    fontSize: 15,
  },
  dropDownItemContainer: {
    backgroundColor: dark.colors.surface0.hex,
    borderRadius: 10,
  },
  dropDownContainer: {
    backgroundColor: dark.colors.surface0.hex,
    borderRadius: 10,
    borderWidth: 0,
  },
  dropDownItemText: {
    color: dark.colors.text.hex,
    fontSize: 15,
  }
});
