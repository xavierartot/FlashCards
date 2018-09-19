import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native'
import { purple, white, lightPurp, blue } from '../utils/colors'

import FlipCard from 'react-native-flip-card'

class Card extends Component {
  render() {
    const { question, answer, color } = this.props
    console.log(question)
    console.log(answer)
    return (
      <View style={styles.container}>
        <FlipCard
          clickable
          flip
          flipHorizontal
          flipVertical={false}
          friction={6}
          onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          perspective={1000}
          style={styles.card}
        >
          <View style={styles.face}>
            <Text>The Face</Text>
          </View>
          <View style={styles.back}>
            <Text>The Back</Text>
          </View>
        </FlipCard>
        {/*
        <Text style={styles.face}>
          {question}
        </Text>
        <Text style={styles.back}>
          {answer}
        </Text> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxHeight: 300,
  },
  flipCard: {
    flex: 1,
    borderWidth: 5,
    height: 300,
  },

  face: {
    flex: 1,
    backgroundColor: purple,
    borderWidth: 5,
    height: 300,
    // height: 200,
  },

  back: {
    flex: 1,
    backgroundColor: blue,
    borderWidth: 5,
    // height: 200,
  },
})
export default Card
