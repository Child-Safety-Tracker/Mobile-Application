import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  useCameraDevice,
  useCameraPermission,
  Camera,
  useCodeScanner,
} from 'react-native-vision-camera';

// @ts-ignore
import QRScanIcon from '@assets/icons/screens/device_management/QR_scan_white.svg';

const DeviceManagementAdd = () => {
  // Check for camera permission
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    console.log('[DeviceManagement] No camera permission');
  }

  const camera = useCameraDevice('back');
  if (camera == null) {
    console.log('[DeviceManagement] No camera device');
  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: code => {
      console.log(
        `Scanned ${code.length} codes with value of: ${code[0].value}`,
      );
    },
  });

  return camera == null ? null : (
    <View style={styles.container}>
      <Camera
        style={styles.cameraView}
        device={camera}
        isActive={true}
        codeScanner={codeScanner}
      />
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <QRScanIcon width={300} height={300} color="white" />
      </View>
    </View>
  );
};

export default DeviceManagementAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cameraView: {
    flex: 1,
  },
});
