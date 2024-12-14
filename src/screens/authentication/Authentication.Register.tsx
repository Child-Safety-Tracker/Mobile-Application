import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

// @ts-ignore
import GoogleIcon from '@assets/icons/screens/authentication/google-fill.svg';
// @ts-ignore
import FacebookIcon from '@assets/icons/screens/authentication/facebook-fill.svg';
import {useNavigation} from '@react-navigation/native';

const InformationInput = ({description}: {description: string}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={styles.inputDescription}>{description}</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
    </View>
  );
};

const Separator = ({height}: {height: number}) => {
  return (
    <View
      style={{
        height: height,
      }}
    />
  );
};

const AuthenticationRegister = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>Register</Text>
      </View>
      <View style={styles.inputContainer}>
        <InformationInput description={'Username'} />
        <Separator height={20} />
        <InformationInput description={'Password'} />
        <Separator height={30} />
        <InformationInput description={'Confirm Password'} />
        <Separator height={35} />
        <TouchableOpacity style={styles.submitContainer}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login' as never)}
        style={styles.registerContainer}>
        <Text style={styles.registerText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticationRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: dark.colors.crust.hex,
  },

  headingContainer: {
    flex: 0.1,
    justifyContent: 'center',
  },
  header: {
    textAlignVertical: 'center',
    fontSize: fontSize.heading.large,
    fontWeight: 'bold',
    color: dark.colors.text.hex,
  },

  inputContainer: {
    flex: 0.55,
  },

  inputDescription: {
    marginLeft: 2,
    fontSize: fontSize.text.mediumLarge,
    color: 'white',
  },

  input: {
    marginTop: 15,
    paddingHorizontal: 10,
    height: 55,
    borderRadius: 13,
    backgroundColor: dark.colors.surface0.hex,
    color: dark.colors.text.hex,
  },

  submitContainer: {
    height: 55,
    borderRadius: 13,
    backgroundColor: dark.colors.teal.hex,
    justifyContent: 'center',
  },

  submitText: {
    textAlign: 'center',
    fontSize: fontSize.text.mediumLarge,
    fontWeight: 500,
    color: dark.colors.crust.hex,
  },

  registerContainer: {
    flex: 0.1,
    justifyContent: 'flex-start',
  },

  registerText: {
    textDecorationLine: 'underline',
    textDecorationColor: dark.colors.teal.hex,
    fontSize: fontSize.text.mediumLarge,
    color: dark.colors.text.hex,
    textAlign: 'center',
  },
});
