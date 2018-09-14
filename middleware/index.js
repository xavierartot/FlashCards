import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware } from 'redux'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: false,
  level: {
    prevState: false, action: false, nextState: 'log', error: 'log',
  },
})
export default applyMiddleware(
  thunk,
  logger,
)
