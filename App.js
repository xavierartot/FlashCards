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
import { LOAD_DATAS, loadDatas } from './utils/helpers'
import { receiveDecks } from './actions'
import { purple, white } from './utils/colors'
import reducer from './reducers'
// components
import Decks from './components/Decks'
import DeckDetail from './components/DeckDetail'
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
const Stacks = createStackNavigator({
  // new routes
  Decks: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      headerTitleStyle: {
      },
    },
  },
})


const store = createStore(reducer, middlewares)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
class App extends React.Component {
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
