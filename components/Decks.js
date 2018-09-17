import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  FlatList,
  View,
  Text,
  AsyncStorage,
  StyleSheet,
} from 'react-native'
import DeckList from './DeckList'
// import { receiveDecks } from '../actions'
// import { getDatas } from '../utils/api'
import { handleInitDecks } from '../utils/helpers'
import Deck from './Deck'
import { purple, white, lightPurp } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: lightPurp,
    maxHeight: 40,
    width: 150,
    // padding: 20,
    marginBottom: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  containerDecks: {
    // flex: 1,
    height: 40,
    // flexDirection: 'column',
  },
  title: {
    color: white,
    fontSize: 15,
  },
})
class Decks extends Component {
  state = {
    ready: null,
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitDecks())
  }
  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            CARD DECKS
          </Text>
          <Ionicons
            color={white}
            name="ios-arrow-round-down"
            size={30}
            style={{ fontSize: 25 }}
          />
        </View>
        <View style={styles.containerDecks}>
          <FlatList
            data={decks}
            keyExtractor={(item, index) => item[item]}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          {/*
            <FlatList
              data={['a', 'b']}
              keyExtractor={(item, index) => item}
              renderItem={({ item }) => <Text>{item.reply}</Text>}
            />

            <FlatList
              data={decks}
              keyExtractor={(deck) => deck}
              renderItem={{deck} => (
                <Deck deck={deck} />
              )}
            />
           */}
        </View>
      </View>
    )
  }
}
function mapStateToProps(state, props) {
  // alert(JSON.stringify(state))
  const keys = Object.keys(state)
  const values = Object.values(state)
  // const objKeys = Object.assign({}, ['a', 'b', 'c'])// {0:"a", 1:"b", 2:"c"}
  const objKeys = Object.assign({}, keys)// {0:"a", 1:"b", 2:"c"}
  // alert(JSON.stringify(objKeys))
  // keys.reduce(function(result, item, index, array) {
  // result[index] = item; //a, b, c
  // return result;
  // }, {}) //watch out the empty {}, which is passed as "result"

  // value.map(e => alert({ ...e }))
  // alert(keys)
  return {
    decks: Object.values(objKeys),
  }
}
export default connect(mapStateToProps)(Decks)
