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

const InformationInput = ({description}: {description: string}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text
        style={{
          marginLeft: 2,
          fontSize: fontSize.text.mediumLarge,
          color: 'white',
        }}>
        {description}
      </Text>
      <TextInput
        style={{
          marginTop: 15,
          paddingHorizontal: 10,
          height: 55,
          borderRadius: 13,
          backgroundColor: dark.colors.surface0.hex,
          color: dark.colors.text.hex,
        }}
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

const OAuthButton = ({icon}: {icon: any}) => {
  return (
    <TouchableOpacity
      style={{
        height: 55,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: dark.colors.subtext0.hex,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {icon}
    </TouchableOpacity>
  );
};

const AuthenticationLogin = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlignVertical: 'center',
            fontSize: fontSize.heading.large,
            fontWeight: 'bold',
            color: dark.colors.text.hex,
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          flex: 0.3,
        }}>
        <InformationInput description={'Username'} />
        <Separator height={20} />
        <InformationInput description={'Password'} />
        <Separator height={30} />
        <TouchableOpacity
          style={{
            height: 55,
            borderRadius: 13,
            backgroundColor: dark.colors.teal.hex,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: fontSize.text.mediumLarge,
              fontWeight: 500,
              color: dark.colors.crust.hex,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
        <Separator height={30} />
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
});
