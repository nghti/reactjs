import { fork, call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import _ from 'lodash';
import { toast } from 'react-toastify';

import * as authActions from '@/store/auth/actions';
import * as authService from '@/api/auth';
import { setToken, removeToken } from '@/utils/helpers';

function* login(action) {
  try {
    const { data } = yield call(authService.loginRequest, action.payload.user);
    if (!_.isEmpty(data)) {
      removeToken();
      setToken(data.token);
      yield put(authActions.loginSuccess(data));
      toast.success('Login Success!');
      yield put(push('/'));
    }
  } catch (e) {
    yield put(authActions.loginFailure(e));
    toast.error('Login Error!');
  }
}

function* logout() {
  try {
    // yield call(authService.loginRequest) // Remove token serve
    removeToken();
    yield put(authActions.logoutSuccess());
    toast.success('Logout Success!');
    yield put(push('/login'));
  } catch (e) {
    yield put(authActions.logoutFailure(e));
    toast.error('Logout Error!');
  }
}

function* watchAuthRequest() {
  yield takeEvery(authActions.types.AUTH_LOGIN_REQUEST, login);
  yield takeEvery(authActions.types.AUTH_LOGOUT_REQUEST, logout);
}

export const authSaga = [fork(watchAuthRequest)];
