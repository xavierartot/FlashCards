import React, { Component } from 'react'
import { TouchableOpacity, AsyncStorage, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { LOAD_DATAS, loadDatas } from '../utils/helpers'
import pick from 'lodash/pick'
import { getRandomColor, purple, white } from '../utils/colors'

import { withNavigation } from 'react-navigation'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'List Decks',
  });
  componentWillMount() {
    const { dispatch, deck } = this.props
    AsyncStorage.getItem(LOAD_DATAS)
      .then((results) => {
        const data = JSON.parse(results)
        // alert(data)
      })
  }
  render() {
    const {
      numberCards, deck, questionsDeck, titleDeck, navigation,
    } = this.props
    const { navigate } = this.props.navigation
    const randColor = getRandomColor()
    // alert(JSON.stringify(this.props.navigation))
    console.log(this.props, navigate)
    return (
      <View style={[styles.card, { backgroundColor: randColor }]}>
        <TouchableOpacity
          onPress={() =>
            navigate('DeckList', { deck })
          }
          style={styles.center}
        >
          { deck }
          <Text style={styles.textFace}>
            { deck }
          </Text>
          <Text style={styles.textFaceLabel}>
            { numberCards && numberCards > 1
          ? `${numberCards} cards`
          : `${numberCards} card`
          }
          </Text>
        </TouchableOpacity>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    minHeight: 80,
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
  },
  textFaceLabel: {
    flex: 1,
    color: white,
    textAlign: 'center',
    fontSize: 18,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})
function mapStateToProps(state, { deck }) {
  // alert(JSON.stringify(state))
  const deckObj = Object.values(pick(state, [deck]))
  const titleDeck = deckObj.map(e => e.title)

  const questionsDeck = deckObj.map(e => e.questions)
  // alert(JSON.stringify(questionsDeck))
  // const test = questionsDeck.map((e) => {
  // alert(` ${e}: ${e.questions} : ${Object.keys([...e.questions])}`)
  // })
  // alert(`${deck} : ${JSON.stringify(questionsDeck[0])} :
  // ${questionsDeck[0].length}`)
  const numberCards = questionsDeck[0] !== undefined
    ? questionsDeck[0].length
    : ''
  console.log(this.props)
  return {
    titleDeck,
    questionsDeck: questionsDeck[0],
    numberCards,
  }
}
export default withNavigation(connect(mapStateToProps)(Deck))
