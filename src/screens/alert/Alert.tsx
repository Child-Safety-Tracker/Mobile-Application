import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';

import AlertHeading from './components/Alert.Heading';
import AlertMap from './components/Alert.Map';

import {dark} from '@lib/colors/theme';

// @ts-ignore
import FlagFillIcon from '@assets/icons/screens/alert/flag-fill.svg';
// @ts-ignore
import BoundaryLineIcon from '@assets/icons/screens/alert/boundary-line.svg';

// Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file

const AlertScreen = () => {
    const [message, setMessage] = useState(null);
    const [longitude, setLongitude] = useState(108.194101);
    const [latitude, setLatitude] = useState(16.036829);

    return (
        <View style={styles.container}>
            <View style={styles.alertHeadingWrapper}>
                <AlertHeading/>
            </View>
            <View style={styles.alertMapWrapper}>
                <AlertMap lon={longitude} lat={latitude}/>
            </View>
            <TouchableOpacity style={styles.touchButton} onPress={() => {
                fetch('http://100.102.188.1:1234/predict-guideline?index=0').then(response => response.json())
                    .then(json => {
                        setMessage(json.summary);
                        setLongitude(json.structured_output.suggested_search_locations[0].longitude);
                        setLatitude(json.structured_output.suggested_search_locations[0].latitude);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }}>
                <Text style={styles.buttonText}>Trigger</Text>
            </TouchableOpacity>
            <View style={styles.generativeAIBox}>
                <Text style={styles.generativeAIText}>{message}</Text>
            </View>
        </View>
    );
};

export default AlertScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: dark.colors.crust.hex,
    },

    alertHeadingWrapper: {
        flex: 0.1,
    },

    alertConfigurationWrapper: {
        flex: 0.13,
        flexDirection: 'row',
    },

    alertConfigurationSeparator: {
        width: 20,
    },

    alertDeviceSelectionWrapper: {
        flex: 0.12,
        justifyContent: 'center',
    },

    alertMapWrapper: {
        flex: 0.5,
    },
    touchButton: {
        flex: 0.05,
        alignSelf: 'center',
        width: '50%',
        borderRadius: 20,
        backgroundColor: dark.colors.text.hex,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },

    generativeAIBox: {
        flex: 0.30,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: dark.colors.text.hex
    },
    generativeAIText: {
        fontSize: 17,
        color: dark.colors.text.hex,
    }
});
