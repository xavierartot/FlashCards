import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, AsyncStorage, StyleSheet } from 'react-native'
import DeckList from './DeckList'
import { receiveDecks } from '../actions'
import { getDatas } from '../utils/api'
import { loadDecks, LOAD_DATAS, loadDatas } from '../utils/helpers'
import Deck from './Deck'
import { purple, white } from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: purple,
    maxHeight: 30,
    // flexDirection: 'row',
    height: 50,
    width: 130,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: white,
    flex: 1,
    marginTop: 5,
    fontSize: 15,
  },
})
class Decks extends Component {
  state = {
    ready: null,
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(receiveDecks(loadDatas()))
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            CARD DECKS
          </Text>
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
  const key = Object.keys(state)
  return {
    decks: key,
  }
}
export default connect(mapStateToProps)(Decks)
