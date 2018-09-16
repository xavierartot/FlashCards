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
    HTML: {
      title: 'HTML',
      questions: [
        {
          question: 'What is a doctype?',
          answer: 'Elit placeat itaque iste harum esse, quasi ipsum non Fugit repellat accusamus debitis similique tempora! Odio dolor enim tempora aspernatur consectetur? Unde ab dicta iure dolor omnis praesentium Debitis aspernatur!',
        },
      ],
    },
    CSS: {
      title: 'CSS',
      questions: [
        {
          question: 'What is Flexbox?',
          answer: 'An elegant layout method for a more civilized age.',
        },
      ],
    },
    Firebase: {
      title: 'Firebase',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'Firebase is a Backend-as-a-Service — BaaS — grew up into a next-generation app-development platform on Google Cloud Platform.',
        },
      ],
    },
    JSON: {
      title: 'JSON',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'JSON, or JavaScript Object Notation, is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML.',
        },
      ],
    },
    Vim: {
      title: 'Vim',
      questions: [
        {
          question: 'What is a Vim?',
          answer: 'Vim is just a text editor. That’s it.',
        },
      ],
    },
    reactNative: {
      title: 'reactNative',
      questions: [
        {
          question: 'What is a react-native?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
        },
        {
          question: 'Can you use Androis and IOS?',
          answer: 'yes',
        },
      ],
    },
  }
}

export function handleInitDecks() {
  return (dispatch, getState) => {
    AsyncStorage.setItem(LOAD_DATAS, JSON.stringify(loadDatas()))
    dispatch(receiveDecks(loadDatas()))
  }
}
