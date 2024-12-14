import React, {useState} from 'react';
import {StyleSheet,View} from 'react-native';
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
  const [successScan, setSuccessScan] = useState(false);

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
      console.log(code[0].value);
      // Check if the scanned string is JSON string
      if (code[0].value![0] === '{' || code[0].value![0] === '[') {
        console.log('First condition block get called');
        const parsedString = JSON.parse(code[0].value!);
        // Check every field for validation
        if (
          typeof parsedString.deviceId !== 'undefined' ||
          typeof parsedString.userId !== 'undefined' ||
          typeof parsedString.privateKey !== 'undefined'
        ) {
          console.log('Second condition block get called');
          setSuccessScan(true);
        }
      } else {
        setSuccessScan(false);
      }
      setScanned(true);
      setActiveCamera(false);
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
      <View style={styles.statusContainer}>
        {scanned ? (
          <DeviceManagementAddStatus success={successScan} />
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
  },
});
