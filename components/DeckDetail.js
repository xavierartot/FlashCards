import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { purple, white, lightPurp, blue } from '../utils/colors'
// import CardFlip from 'react-native-flip-card'
import Button from 'react-native-button'

class DeckDetail extends Component {
  // header navigation
   static navigationOptions = ({ navigation }) => ({
     title: navigation.state.params.deck,
   });
   render() {
     // console.ignoredYellowBox = ['Warning: setState(...)']
     const {
       numberCard, randColor, deck, test, navigation,
     } = this.props
     // console.log(numberCard, this.props, navigation.state.params.deck, deck)
     return (
       <View style={styles.container}>
         <Text style={styles.title}>
           {navigation.state.params.deck}
         </Text>
         <Text style={styles.subTitle}>
           {navigation.state.params.numberCard}
         </Text>
         <View style={{ marginTop: 10 }}>
           <Button
             containerStyle={{
               padding: 12, height: 55, overflow: 'hidden', borderRadius: 5, backgroundColor: lightPurp, marginBottom: 10, width: 300,
             }}
             disabledContainerStyle={{ backgroundColor: 'pink' }}
             onPress={() => this._handlePress()}
             style={{ fontSize: 25, color: 'white' }}
             styleDisabled={{ color: 'white' }}
           >
Add Card
           </Button>
           <Button
             containerStyle={{
               padding: 12, height: 55, overflow: 'hidden', borderRadius: 5, backgroundColor: blue, marginBottom: 10,
             }}
             disabledContainerStyle={{ backgroundColor: 'pink' }}
             onPress={() => this._handlePress()}
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
export default DeckDetail
