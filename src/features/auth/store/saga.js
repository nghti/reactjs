import { fork, call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import _ from "lodash";

import * as authActions from './actions'
import * as authService from '../../../services/auth'
import { setToken, removeToken } from "../../../utils/helpers";

function* login(action) {
  try {
    const {data} = yield call(authService.loginRequest, action.payload.user)
    if(!_.isEmpty(data.data)) {
      removeToken()
      setToken(data.data.token)
      yield put(authActions.loginSuccess(data))
      yield put(push('/top'))
    }
  } catch (e) {
    yield put(authActions.loginFailure(e))
  }
}

function* logout() {
  try {
    // yield call(authService.loginRequest)
    removeToken()
    yield put(authActions.logoutSuccess())
    yield put(push('/login'))
  } catch (e) {
    yield put(authActions.logoutFailure(e))
  }
}

function* watchAuthRequest() {
  yield takeEvery(authActions.types.AUTH_LOGIN_REQUEST, login)
  yield takeEvery(authActions.types.AUTH_LOGOUT_REQUEST, logout)
}

export const authSaga = [
  fork(watchAuthRequest)
]
