import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PokemonGrid from './views/PokemonGrid';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // TODO : INITIALIZE STATE
  }

  componentDidMount() {
    // TODO: ONE TIME OPERATIONS
  }

  render(props) {
    return (
        <PokemonGrid></PokemonGrid>
    );
  }
}

const headerStyles = {
  headerStyle: {
    backgroundColor: '#ff5855',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  }, 
  headerBackTitle: ' ',
  headerTitle: 'Pokédex'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
