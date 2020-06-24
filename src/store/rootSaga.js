import { all } from 'redux-saga/effects';

import { authSaga } from '@/store/modules/auth/saga';
import { dashboardSaga } from '@/store/modules/dashboard/saga';

export default function* rootSagas() {
  yield all([...authSaga, ...dashboardSaga]);
}
