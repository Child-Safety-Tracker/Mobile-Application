import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

// @ts-ignore
import {fontSize} from '@lib/fontSize';
import {dark} from '@lib/colors/theme';

const FindDeviceHeading = ({enabled}: { enabled: boolean }) => {
    const [isEnabled, setIsEnabled] = useState(enabled);
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Find Device</Text>
            <Switch
                value={isEnabled}
                trackColor={{
                    false: dark.colors.surface0.hex,
                    true: dark.colors.surface1.hex,
                }}
                thumbColor={isEnabled ? dark.colors.teal.hex : dark.colors.text.hex}
                onValueChange={() => {
                    setIsEnabled(!isEnabled);
                }}
            />
        </View>
    );
};

export default FindDeviceHeading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    welcome: {
        fontSize: fontSize.heading.large,
        fontWeight: 'bold',
        color: dark.colors.text.hex,
    },

    userName: {
        color: dark.colors.teal.hex,
    },

    notificationContainer: {
        padding: 10,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: dark.colors.surface0.hex,
        backgroundColor: dark.colors.mantle.hex,
    },
});
