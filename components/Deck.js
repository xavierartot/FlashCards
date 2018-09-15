import React, { Component } from 'react'
import { TouchableOpacity, AsyncStorage, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { loadDecks, LOAD_DATAS, loadDatas } from '../utils/helpers'
import pick from 'lodash/pick'
import { purple, white } from '../utils/colors'
// import FlipCard from 'react-native-flip-card'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    minHeight: 70,
    backgroundColor: purple,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  textFace: {
    flex: 1,
    color: white,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 17,
  },
})
class Deck extends Component {
  componentWillMount() {
    const { dispatch, deck } = this.props
    AsyncStorage.getItem(LOAD_DATAS)
      .then((results) => {
        const data = JSON.parse(results)
        // alert(data)
      })
  }
  render() {
    const { deck, questionsDeck, titleDeck } = this.props
    return (
      <View style={styles.card}>
        <Text style={styles.textFace}>
          { deck }
        </Text>
      </View>
    )
  }
}
function mapStateToProps(state, { deck }) {
  // alert(JSON.stringify(state))

  const deckObj = Object.values(pick(state, [deck]))
  const titleDeck = deckObj.map(e => e.title)

  const questionsDeck = deckObj.map(e => e.questions)
  // alert(JSON.stringify(questionsDeck))
  questionsDeck.map((e) => {
    // alert(` ${e}: ${e.questions}`)
  })

  // alert(JSON.stringify(questionsDeck[0]))
  return {
    titleDeck,
    questionsDeck: questionsDeck[0],
  }
}
export default connect(mapStateToProps)(Deck)
