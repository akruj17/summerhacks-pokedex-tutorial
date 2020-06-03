import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {getImageRequire} from '../pokemonRequires';

export default function PokemonDetailed(props) {
    return (
        <View style={styles.fillParent}>
            <Image style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}> </Text>
                <Text style={styles.property}>growth rate:</Text>
                <Text style={styles.property}>capture rate:</Text>
                <Text style={styles.property}>shape:</Text>
                <Text style={styles.biggerName}>evolves from:</Text>
                <Image style={styles.evolvesFromImage}/>
            </View>
        </View>
    )
}

function parsePokemonId(url) {
	return parseInt(url.match(/https:\/\/pokeapi.co\/api\/v2\/pokemon-species\/(\d+)\//)[1]);
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        flex:1,
        alignItems: 'center',
        resizeMode: 'contain',
        padding: 0,
    },
    fillParent: {
        width: '100%', 
        flex: 1,
        alignItems: 'center',
    },
    infoContainer: {
        flex: 2,
        marginTop: -20,
        width: "100%"
    },
    name: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 30,
    },
    property: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    biggerName: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
    },
    evolvesFromImage: {
        flex: 0.8,
        alignItems: 'center',
        resizeMode: 'contain',
        width: '100%',
    }
});
