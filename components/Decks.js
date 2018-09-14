import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, AsyncStorage } from 'react-native'
import DeckList from './DeckList'
import { receiveDecks } from '../actions'
import { getDatas } from '../utils/api'
import { loadDecks, LOAD_DATAS, loadDatas } from '../utils/helpers'
import Deck from './Deck'

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
      <View>
        {
          decks &&
           decks.map(e => (
             <View key={e} >
               <Deck deck={e} id={e} />
             </View>
           ))
          }
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
