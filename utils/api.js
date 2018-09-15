import { AsyncStorage } from 'react-native'
import { LOAD_DATAS } from './helpers'

export const getDatas = () => {
  try {
    AsyncStorage.getItem(LOAD_DATAS)
    // if (value !== null) {
    // // We have data!!
    // console.log(value)
    // }
  } catch (error) {
    alert(error)
    // Error retrieving data
  }
}


export function fetchDecks() {
  return AsyncStorage.getItem(LOAD_DATAS)
}
