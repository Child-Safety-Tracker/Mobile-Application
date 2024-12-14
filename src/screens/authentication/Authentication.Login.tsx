import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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

const OAuthButton = ({icon}: {icon: any}) => {
  return <TouchableOpacity style={styles.OAuthButton}>{icon}</TouchableOpacity>;
};

const AuthenticationLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <InformationInput description={'Username'} />
        <Separator height={20} />
        <InformationInput description={'Password'} />
        <Separator height={30} />
        <TouchableOpacity style={styles.submitContainer}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.OAuthContainer}>
        <OAuthButton
          icon={
            <GoogleIcon width={35} height={35} color={dark.colors.teal.hex} />
          }
        />
        <Separator height={20} />
        <OAuthButton
          icon={
            <FacebookIcon width={35} height={35} color={dark.colors.teal.hex} />
          }
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register' as never)}
        style={styles.registerContainer}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthenticationLogin;

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
    flex: 0.4,
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

  OAuthContainer: {
    flex: 0.2,
  },

  OAuthButton: {
    height: 55,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: dark.colors.subtext0.hex,
    justifyContent: 'center',
    alignItems: 'center',
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
