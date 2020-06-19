import { fork, call, put, takeEvery } from 'redux-saga/effects';

import * as dashboardActions from '@/store/dashboard/actions';
import * as dashboardService from '@/api/dashboard';

function* user(action) {
  try {
    const { data } = yield call(dashboardService.userRequest, action.payload.user);
    yield put(dashboardActions.userSuccess(data));
  } catch (e) {
    yield put(dashboardActions.userFailure(e));
  }
}

function* watchDashboardRequest() {
  yield takeEvery(dashboardActions.types.USERS_REQUEST, user);
}

export const dashboardSaga = [fork(watchDashboardRequest)];
