import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

import {dark} from '@lib/colors/theme';
import {fontSize} from '@lib/fontSize';

import {useNavigation} from '@react-navigation/native';
import {AuthenticationContext} from '../../context/Authentication.context';
import AuthenticationError from './components/Authentication.Error';

const InformationInput = ({
  description,
  text,
  setText,
  isPassword,
}: {
  description: string;
  text: string;
  setText: any;
  isPassword: boolean;
}) => {
  return (
    <View>
      <Text style={styles.inputDescription}>{description}</Text>
      <TextInput
        secureTextEntry={isPassword!}
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
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

  const {setIsLoggedIn}: any = useContext(AuthenticationContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [errorPopup, setErrorPopup] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>Register</Text>
      </View>
      <View style={styles.inputContainer}>
        <InformationInput
          isPassword={false}
          text={username}
          setText={setUsername}
          description={'Username'}
        />
        <Separator height={20} />
        <InformationInput
          isPassword={true}
          text={password}
          setText={setPassword}
          description={'Password'}
        />
        <Separator height={30} />
        <InformationInput
          isPassword={true}
          text={repeatedPassword}
          setText={setRepeatedPassword}
          description={'Confirm Password'}
        />
        <Separator height={35} />
        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => {
            console.log(username, password);
            if (
              username.length === 0 &&
              password.length === 0 &&
              repeatedPassword.length === 0
            ) {
              setErrorPopup('Missing username or password');
              setTimeout(() => setErrorPopup(''), 3000);
            } else if (username === 'abcd') {
              setErrorPopup('User exist');
              setTimeout(() => setErrorPopup(''), 3000);
            } else {
              setTimeout(() => setIsLoggedIn(true), 1000);
            }
          }}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.registerContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.registerText}>Login</Text>
      </TouchableOpacity>
      {errorPopup.length === 0 ? null : (
        <AuthenticationError errorPopup={errorPopup} />
      )}
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
