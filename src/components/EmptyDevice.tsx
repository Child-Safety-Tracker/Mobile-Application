import React from "react";
import {StyleSheet, Text, View} from "react-native";
// @ts-ignore
import Inbox2Fill from '@assets/icons/screens/home/inbox-2-fill.svg'
import {dark} from "@lib/colors/theme";

const EmptyDevice = () => {
    return <View style={styles.emptyDeviceScreen}>
        <Inbox2Fill width={40} height={40} color={dark.colors.text.hex} opacity={0.65}/>
        <Text style={styles.emptyDeviceText}>No device yet</Text>
    </View>
}

export default EmptyDevice;

const styles = StyleSheet.create({
    emptyDeviceScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    emptyDeviceText: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20,
        color: dark.colors.text.hex,
        opacity: 0.7
    }
})
