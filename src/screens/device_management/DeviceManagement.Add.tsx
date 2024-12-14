import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  useCameraDevice,
  useCameraPermission,
  Camera,
  useCodeScanner,
} from 'react-native-vision-camera';

// @ts-ignore
import QRScanIcon from '@assets/icons/screens/device_management/QR_scan_white.svg';
import DeviceManagementAddStatus from './DeviceManagement.Add.Status';

const DeviceManagementAdd = () => {
  const [scanned, setScanned] = useState(false);
  const [activeCamera, setActiveCamera] = useState(true);

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
      setScanned(true);
      setActiveCamera(false);
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
        isActive={activeCamera}
        codeScanner={codeScanner}
      />
      <View
        style={styles.statusContainer}>
        {scanned ? (
          <DeviceManagementAddStatus success={true} />
        ) : (
          <QRScanIcon width={300} height={300} color="white" />
        )}
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

  statusContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }
});
