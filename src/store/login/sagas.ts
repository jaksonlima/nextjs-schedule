import { fork } from "redux-saga/effects";

import { watchLoginSignInRequest } from "./loginRequest";

export const loginSagas = [fork(watchLoginSignInRequest)];
