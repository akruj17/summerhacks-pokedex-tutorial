import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {getImageRequire} from '../pokemonRequires';

export default function PokemonDetailed(props) {
    // the data that we pass from the Grid using the navigate function
    const data = props.route.params.detailedData
    return (
        <View style={styles.fillParent}>
            <Image style={styles.image} source={getImageRequire(parseInt(data.id))}/>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.property}>growth rate: {data.growth_rate.name}</Text>
                <Text style={styles.property}>capture rate: {data.capture_rate}</Text>
                <Text style={styles.property}>shape: {data.shape.name}</Text>
                {/* The following two lines are examples of conditional rendering. It is
                    possible for the evolves_from_species to be null if the pokemon did not
                    evolve from anyone. The app will crash if we try to render these null values.
                    So we first do a null check on this value. The && signifies that if the first
                    part (the null check) fails, then the second part won't even be evaluated. */}
                {data.evolves_from_species && (
                    <Text style={styles.biggerName}>evolves from: {data.evolves_from_species.name}</Text>
                )}
                {data.evolves_from_species && (
                    <Image style={styles.evolvesFromImage}
                        source={getImageRequire(parsePokemonId(data.evolves_from_species.url))}/>
                )}
            </View>
        </View>
    );
}

// extracts the pokemon id number from a url
export function parsePokemonId(url) {
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