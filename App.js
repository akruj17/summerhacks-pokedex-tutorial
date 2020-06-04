import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonGrid from './views/PokemonGrid';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import PokemonDetailed from './views/PokemonDetailed';

const Stack = createStackNavigator();

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false};
    this.loadFontsAsync = this.loadFontsAsync.bind(this);
  }
  
  async loadFontsAsync() {
    await Font.loadAsync({
        'Pokemon-Font': require('./assets/fonts/Pokemon-Solid.ttf'),
      });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
      this.loadFontsAsync();
  }

  render(props) {
      if (!this.state.fontLoaded) {
        return <AppLoading />
      }
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={headerStyles}>
            <Stack.Screen
              name="Grid"
              component={PokemonGrid} />
            <Stack.Screen
              name="Detailed"
              component={PokemonDetailed} />
          </Stack.Navigator>
        </NavigationContainer>
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
      fontFamily: 'Pokemon-Font',
      fontSize: 30,
    }, 
    headerBackTitle: ' ',
    headerTitle: 'Pokedex'
};
