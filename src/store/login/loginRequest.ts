import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { Creators, Types } from ".";

function* loginSignInRequest({ payload }: any) {
  try {
    // @ts-ignore: Unreachable code error
    const response = yield call(axios.get, payload.url);
    yield put(Creators.loginSuccess({ users: response.data }));

    console.log(response.data);
  } catch (error) {
    console.error("error", error);
  }
}

export function* watchLoginSignInRequest() {
  yield takeLatest(Types.LOGIN_REQUEST, loginSignInRequest);
}
