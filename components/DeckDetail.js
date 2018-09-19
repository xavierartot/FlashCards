import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, lightPurp, blue } from '../utils/colors'
import Button from 'react-native-button'
import { NavigationActions, withNavigation } from 'react-navigation'
// components
import Quiz from './Quiz'

class DeckDetail extends Component {
  // header navigation
   static navigationOptions = ({ navigation }) => ({
     title: navigation.state.params.deck,
   });
  handleAddCard = () => {
  }
  handleStartQuiz = (view) => {
    // console.log(this.props)
    const {
      deckObject, color, nameDeck, navigation,
    } = this.props
    console.log(deckObject, color, nameDeck, navigation)
    // return () => navigation.dispatch(navigateAction)
  }
  render() {
    const {
      deckObject, color, nameDeck, navigation,
    } = this.props
    // const navigateAction = NavigationActions.navigate({
    // routeName: 'Quiz',
    // params: { deckObject, color, nameDeck },
    // })
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {nameDeck }
        </Text>
        <Text style={styles.subTitle}>
          {nameDeck }
        </Text>
        <View style={{ marginTop: 10 }}>
          <Button
            containerStyle={{
              padding: 12,
              height: 55,
              overflow: 'hidden',
              borderRadius: 5,
              backgroundColor: white,
              marginBottom: 10,
              width: 300,
             }}
            deck={nameDeck}
            disabledContainerStyle={{ backgroundColor: 'pink' }}
            onPress={() => this.handleAddCard()}
            style={{ fontSize: 25, color }}
            styleDisabled={{ color }}
          >
Add Card
          </Button>
          <Button
            containerStyle={{
               padding: 12, height: 55, overflow: 'hidden', borderRadius: 5, backgroundColor: color, marginBottom: 10,
             }}
            disabledContainerStyle={{ backgroundColor: color }}
            onPress={() => navigation.navigate('Quiz', { deckObject, color, nameDeck })}
            style={{ fontSize: 25, color: 'white' }}
            styleDisabled={{ color: 'white' }}
          >
Start Quiz
          </Button>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 50,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    fontSize: 30,
    borderColor: purple,
    color: purple,
  },
  btnActive: {
    borderColor: white,
    backgroundColor: purple,
    color: white,
  },

})
function mapStateToProps(decks, { navigation }) {
  // console.log(decks[navigation.state.params.deck])
  // console.log(decks[navigation.state.params.deck].questions)
  return {
    deckObject: decks[navigation.state.params.deck].questions,
    color: navigation.state.params.randColor,
    nameDeck: navigation.state.params.deck,
  }
}
export default connect(mapStateToProps)(DeckDetail)
