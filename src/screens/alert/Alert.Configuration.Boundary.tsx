import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {dark} from '../../../lib/colors/theme';
import {fontSize} from '../../../lib/fontSize';

const AlerConfigurationBoundary= () => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Boundary</Text>
      <TextInput style={styles.textInput} value={value} onChangeText={setValue} />
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
});
