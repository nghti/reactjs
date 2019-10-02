import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { authReducer } from '../features/auth'
import { topReducer } from '../features/top'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  auth: authReducer,
  top: topReducer
})