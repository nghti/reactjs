import { fork, call, put, takeEvery } from 'redux-saga/effects';

import * as types from '@/store/modules/dashboard/constants';
import * as dashboardActions from '@/store/modules/dashboard/actions';
import * as dashboardService from '@/api/dashboard';

function* user(action) {
  try {
    console.log('action', action);
    const { data } = yield call(dashboardService.userRequest, action.payload.user);
    yield put(dashboardActions.userSuccess(data));
  } catch (e) {
    yield put(dashboardActions.userFailure(e));
  }
}

function* watchDashboardRequest() {
  yield takeEvery(types.USERS_REQUEST, user);
}

export const dashboardSaga = [fork(watchDashboardRequest)];
