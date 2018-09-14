import './ReactotronConfig'
import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { connect, Provider } from 'react-redux'
import { AsyncStorage, View, Platform, StatusBar, Text, StyleSheet } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
// files
import { loadDecks, LOAD_DATAS, loadDatas } from './utils/helpers'
import { receiveDecks } from './actions'
import { purple, white } from './utils/colors'
import reducer from './reducers'
// components
import Decks from './components/Decks'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

import middlewares from './middleware'

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

const store = createStore(reducer, middlewares)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
class App extends React.Component {
  componentDidMount() {
    // loadDecks()

    const ld = loadDatas()
    AsyncStorage.setItem(LOAD_DATAS, JSON.stringify(ld))
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashCardStatusBar backgroundColor={purple} barStyle="light-content" />
          <Stacks />
        </View>
      </Provider>
    )
  }
}

export default App
