import { fork, call, put, takeEvery } from 'redux-saga/effects'
// import { push } from 'react-router-redux'

import * as messageActions from './actions'
import * as messageService from '../../../services/message'

function* getPlaceDetail(action) {
  try {
    const {data} = yield call(messageService.getPlaceDetail, action.payload.placeId)
    yield put(messageActions.fetchPlaceDetailSuccess(data.data))
  } catch (e) {
    yield put({type: messageActions.types.RACE_EVENT_DETAIL_FAILURE})
  }
}

function* watchMessageRequest() {
  yield takeEvery(messageActions.types.MESSAGE_FETCH_PLACE_DETAIL_REQUEST, getPlaceDetail)
}

export const topSaga = [
  fork(watchMessageRequest)
]
