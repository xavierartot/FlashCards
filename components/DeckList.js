import React, { Component } from 'react'
import { YellowBox, Button, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'
// import CardFlip from 'react-native-flip-card'


class DeckList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'udacicards',
    style: {
      flex: 1, maxHeight: 40, backgroundColor: '#0099ff', justifyContent: 'center', alignItems: 'center',
    },
  });
  render() {
    console.ignoredYellowBox = ['Warning: setState(...)']
    const {
      numberCard, randColor, deck, test, navigation,
    } = this.props
    // console.log(numberCard, this.props, navigation.state.params.deck, deck)
    return (
      <View style={styles.container}>
        <Text>
          {navigation.state.params.deck}
        </Text>
        <Text>
          {navigation.state.params.numberCard}
        </Text>
        <View>
          <Button
            accessibilityLabel="Add Card"
            color={purple}
            onPress
            title="Add Card"
          />
          <Button
            accessibilityLabel="Start Quiz"
            color={purple}
            onPress
            title="Start Quiz"
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    textAlign: 'center',
  },
})
export default DeckList
