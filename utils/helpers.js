import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { receiveDecks } from '../actions'

export const LOAD_DATAS = 'Decks'

export function loadDatas() {
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
  }
}

// dispatch thunk
// export function handleTemplate(color) {
// return (dispatch, getState) => {
// dispatch(changeTemplate(color))
// }
// }
export function loadDecks() {
  return (dispatch, getState) => {
    AsyncStorage.setItem(LOAD_DATAS, JSON.stringify(loadDatas()))
    dispatch(receiveDecks(loadDatas()))
  }
}
