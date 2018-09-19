export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'


export const getRandomColor = () => {
  const colorValues = [
    '#292477',
    '#757575',
    '#b71845',
    '#f26f28',
    '#4e4cb8',
    '#7c53c3',
    '#b93fb3',
  ]
  return colorValues[Math.floor(Math.random() * colorValues.length)]
}

export const randomColor = (color) => {
  const randColor = getRandomColor()
  if (randColor === color) {
    return randomColor()
  }
  return randColor
}
