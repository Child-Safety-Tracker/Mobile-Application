import {Text, View} from 'react-native';
import {dark} from '../../../../lib/colors/theme';
import {fontSize} from '../../../../lib/fontSize';
import React from 'react';

// @ts-ignore
import ErrorIcon from '@assets/icons/screens/authentication/error-warning-line.svg';

const AuthenticationError = ({errorPopup}: {errorPopup: string}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 15,
        height: 50,
        width: '100%',
        backgroundColor: dark.colors.surface0.hex,
        position: 'absolute',
        bottom: 20,
      }}>
      <ErrorIcon width={30} height={30} color={dark.colors.red.hex} />
      <Text
        style={{
          paddingLeft: 15,
          fontSize: fontSize.text.mediumLarge,
          color: dark.colors.text.hex,
        }}>
        {errorPopup}
      </Text>
    </View>
  );
};

export default AuthenticationError;
