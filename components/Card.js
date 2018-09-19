import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native'
import { getRandomColor, white, lightPurp, blue } from '../utils/colors'

import FlipCard from 'react-native-flip-card'

class Card extends Component {
  randomColor= (color) => {
    const randColor = getRandomColor()
    if (randColor === color) {
      return this.randomColor()
    }
    return randColor
  }
  render() {
    const { question, answer, color } = this.props
    console.log(color, this.randomColor())
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
          <View style={[styles.back, { backgroundColor: this.randomColor(color) }]}>
            <Text style={styles.cardText}>
              {answer}
            </Text>
          </View>
          <View style={[styles.face, { backgroundColor: color }]}>
            <Text style={styles.cardText}>
              {question}
            </Text>
          </View>
        </FlipCard>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    maxHeight: 200,
    width: 200,
    borderWidth: 0,
    marginTop: 10,
  },
  cardText: {
    color: white,
  },
  face: {
    flex: 1,
    backgroundColor: 'red',
    // color: white,
  },

  back: {
    flex: 1,
    backgroundColor: 'orange',
    // color: white,
  },
})
export default Card
