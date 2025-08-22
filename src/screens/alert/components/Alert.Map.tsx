import React from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {Camera} from '@rnmapbox/maps';

const AlertMap = ({lon, lat}: any) => {

    return (
        <View style={styles.container}>
            <Mapbox.MapView
                logoEnabled={false}
                compassEnabled={false}
                attributionEnabled={false}
                style={styles.map}>
                <Camera
                    centerCoordinate={[
                        lon, lat
                    ]}
                    animationMode={'none'}
                    zoomLevel={17}
                />
            </Mapbox.MapView>
        </View>
    );
};

export default AlertMap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    map: {
        flex: 0.9,
        borderRadius: 20,
        overflow: 'hidden',
    },

    safeZone: {
        backgroundColor: 'rgba(148, 226, 213, 0.3)',
        opacity: 0.2,
        aspectRatio: 1,
        borderWidth: 1,
        borderRadius: '100%',
        borderColor: 'black',
        zIndex: -99,
    },
});
