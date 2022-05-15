import { all } from "redux-saga/effects";

import { loginSagas } from "./login/sagas";

export default function* rootSaga() {
  yield all([...loginSagas]);
}
