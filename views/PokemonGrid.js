import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, FlatList, TouchableHighlight} from 'react-native';
import fullData from '../data/pokemon.json';
import PokemonCell from './PokemonCell';
import { Searchbar } from 'react-native-paper';

export default class PokemonGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filteredData: fullData['pokemonData'], navigator: props.navigation};
        // without binding as shown below, these methods will not be able to access
        // the state defined above. 
        this.goToDetailed = this.goToDetailed.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
    }

    render(props) {
        return (
            <SafeAreaView style={styles.container}>
                <Searchbar placeholder="filter by pokemon name"
                        onChangeText={this.searchChanged}/>
                <ImageBackground source={require('../assets/bg.png')} style={styles.image}>
                    { (this.state.filteredData.length > 0) &&
                        <FlatList
                        data={this.state.filteredData}
                        renderItem={({ item }) => 
                            <TouchableHighlight style={styles.gridCell} onPress={()=> this.goToDetailed(item.id)}>
                                <PokemonCell id={item.id} name={item.identifier} />
                            </TouchableHighlight>}
                        keyExtractor={item => item.id} numColumns={3}
                        style={styles.grid}/>
                    }
                </ImageBackground>
            </SafeAreaView>
        );
    }

    goToDetailed(index) {
        // first make an HTTP request to get the data. Then convert the
        // response to JSON and once that is done, then navigate to the
        // detailed view, passing along the JSON.
        // The fetch call is asynchronous, so to make sure we only navigate
        // once all the data is received, we need to use several 'then' statements
        // chained together.
        let url = 'https://pokeapi.co/api/v2/pokemon-species/' + index
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.state.navigator.navigate('Detailed', 
                {detailedData: json})
            });
    }

    searchChanged(query) {
        // filter the list of valid pokemons. Only include those that
        // include the query anywhere inside the pokemon name
        let filteredPokemon = fullData['pokemonData'].filter((item) => {
            return item.identifier.includes(query.toLowerCase())
        })
        this.setState({filteredData: filteredPokemon})
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
    },
    grid: {
        width: "100%",
    },
    gridCell: {
        margin: 5,
        flex: 1/3,
        flexDirection: 'column',
        aspectRatio: 1,
    },
  });