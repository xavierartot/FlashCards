import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  render() {
    const { deck } = this.props
    return (
      <View>
        <Text>
          { deck }
        </Text>
      </View>
    )
  }
}
function mapStateToProps({ state }, deck) {
  return {
    state,
  }
}
export default connect(mapStateToProps)(Deck)
