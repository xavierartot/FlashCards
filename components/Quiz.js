import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Card from './Card'


class Quiz extends Component {
   static navigationOptions = ({ navigation }) => ({
     title: `Deck: ${navigation.state.params.nameDeck}`,
   });
   render() {
     console.log(this.props)
     const { navigation } = this.props
     const deckObject = navigation.state.params.nameDeck
     const color = navigation.state.params.color
     const nameDeck = Object.values(navigation.state.params.deckObject)
     console.log(nameDeck)
     nameDeck.map((item) => {
       console.log(item.question)
       console.log(item.answer)
     })

     return (
       <View>
         <Text style={{ color }}>
           {nameDeck.map((item, id) => (
             <Card key={item.id} answer={item.answer} question={item.question} />
          ))}

         </Text>
       </View>
     )
   }
}
function mapStateToProps(decks, { navigation }) {
  return {
    decks,
  }
}
export default connect(mapStateToProps)(Quiz)
