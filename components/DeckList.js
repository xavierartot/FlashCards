import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
// import CardFlip from 'react-native-flip-card'

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  card: {
    textAlign: 'center',
  },
})
class DeckList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'List Decks',
  });
  render() {
    const { deck, test, navigation } = this.props
    console.log(this.props, navigation.state.params.deck, deck)
    return (
      <View>
        <Text>
          {navigation.state.params.deck}
        </Text>
        <Text>
          DeckList
        </Text>
        <Text>
          DeckList
        </Text>
        <Text>
          DeckList
        </Text>
      </View>
    )
  }
}
export default DeckList
