import React from 'react';
import { StyleSheet, View} from 'react-native';

export default function PokemonCell(props) {
    return (
        <View style={styles.fillParent}>
            // TODO: Add pokemon image and name
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 4,
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        resizeMode: 'contain',
        padding: 0,
    },
    fillParent: {
        width: '100%', 
        flex: 1,
    },
    name: {
        flex: 1, 
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#ff5855',
    }
});
