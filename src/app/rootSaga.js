import { all } from "redux-saga/effects";

import { topSaga } from "../features/top";
import { authSaga } from "../features/auth";

export default function* rootSagas() {
  yield all([
    ...topSaga,
    ...authSaga,
  ])
}