import { createWrapper, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import { configureStore, applyMiddleware, Store } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";

import { loggerNext } from "../middlewares/loggerReduxSagaNext";
import rootReducer from "./root-redux";
import rootSaga from "./root-saga";

export interface SagaStore extends Store {
  sagaTask: Task;
}

const hydrate = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return Immutable({ ...state, ...action.payload });
  }

  return rootReducer(state, action);
};

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: hydrate,
    enhancers: [applyMiddleware(sagaMiddleware, loggerNext)],
    devTools: process.env.NODE_ENV === "development",
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore);
