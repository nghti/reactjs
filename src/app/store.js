import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory }  from 'history'

import rootReducers from './rootReducer'
import rootSaga from './rootSaga'

const composeEnhancer =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// Create a history
export const history = createBrowserHistory()

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = [routerMiddleware(history), sagaMiddleware]

// mount it on the Store
export const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(...middleware))
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application