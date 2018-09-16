import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, AsyncStorage, StyleSheet } from 'react-native'
import DeckList from './DeckList'
import { receiveDecks } from '../actions'
import { getDatas } from '../utils/api'
import { handleInitDecks, LOAD_DATAS, loadDatas } from '../utils/helpers'
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
          {
          decks &&
          decks.map(e => (
            <View key={e} >
              <Deck deck={e} id={e} />
            </View>
          ))
          }
        </View>
      </View>
    )
  }
}
function mapStateToProps(state, props) {
  const keys = Object.keys(state)
  // alert(keys)
  return {
    decks: keys,
  }
}
export default connect(mapStateToProps)(Decks)
