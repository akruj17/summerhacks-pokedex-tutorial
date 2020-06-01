import React from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';

export default class PokemonGrid extends React.Component {
    constructor(props) {
        super(props);
        // TODO: INITIALIZE STATE
    }

    render(props) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </SafeAreaView>
        );
    }

    goToDetailed(index) {
       // make an HTTP request to get information about a specific pokémon
       // given an ID. Then navigate to the detailed view
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    grid: {
        width: '100%',
    },
    gridCell: {
        margin: 5,
        flex: 1/3,
        flexDirection: 'column',
        aspectRatio: 1,
        backgroundColor: '#ffffff'
    },
  });
