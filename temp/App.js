import React from 'react'
import { View, Platform, StatusBar, Text, StyleSheet } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
// files
import { purple, white } from './utils/colors'
import reducer from './reducers'
// components
import Decks from './components/Decks'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

// status bar
function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={backgroundColor} translucent {...props} />
    </View>
  )
}
const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons color={tintColor} name="md-card" size={30} />,
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons color={tintColor} name="ios-card-outline" size={30} />,
    },
  },
})
// createStackNavigator(RouteConfigs, StackNavigatorConfig);
const Stacks = createStackNavigator(
  {
  // routes
    Decks: {
      screen: Tabs,
    },
  }, // configs
  {
    headerMode: 'none',
  },
)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashCardStatusBar backgroundColor={purple} barStyle="light-content" />
          <DeckList />
          <Stacks />
        </View>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

