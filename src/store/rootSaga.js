import { all } from 'redux-saga/effects';

import { authSaga } from '@/store/auth/saga';
import { dashboardSaga } from '@/store/dashboard/saga';

export default function* rootSagas() {
  yield all([...authSaga, ...dashboardSaga]);
}
