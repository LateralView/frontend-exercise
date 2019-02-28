import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Saga from './sagas'
import reducers from './reducers'
import UserStorage from './middlewares/UserStorage'

const composeEnhanced =
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    UserStorage.initialState(),
    composeEnhanced(
      applyMiddleware(
        sagaMiddleware,
        UserStorage.middleware()
      )
    )
  )
  sagaMiddleware.run(Saga)
  return store
}
