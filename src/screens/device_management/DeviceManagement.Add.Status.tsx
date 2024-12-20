import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {dark} from '@lib/colors/theme';

// @ts-ignore
import QRScanSuccessIcon from '@assets/icons/screens/device_management/QR_scan_success.svg';
// @ts-ignore
import QRScanFailureIcon from '@assets/icons/screens/device_management/QR_scan_error.svg';
import {fontSize} from '../../../lib/fontSize';

const DeviceManagementAddStatus = ({success}: {success: boolean}) => {
  return (
    <View style={styles.container}>
      {success ? (
        <QRScanSuccessIcon
          width={80}
          height={80}
          color={dark.colors.green.hex}
        />
      ) : (
        <QRScanFailureIcon width={80} height={80} color={dark.colors.red.hex} />
      )}
      <Text style={styles.message}>{success ? 'Success' : 'Error'}</Text>
    </View>
  );
};

export default DeviceManagementAddStatus;

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.colors.base.hex,
    borderRadius: 20,
    width: '50%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  message: {
    marginTop: 20,
    fontSize: fontSize.text.mediumLarge,
    color: dark.colors.text.hex,
  },
});
