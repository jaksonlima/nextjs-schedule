import Immutable from "seamless-immutable";
import { AnyAction } from "redux";
import {
  createActions,
  createReducer,
  DefaultActionCreators,
  DefaultActionTypes,
} from "reduxsauce";

export interface loginAction extends AnyAction {
  payload: any;
}

export interface DefaultActionTypesOverride extends DefaultActionTypes {
  LOGIN_REQUEST: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILURE: string;
}

export interface DefaultActionCreatorsOverride extends DefaultActionCreators {
  loginRequest: (payload?: loginAction["payload"]) => loginAction;
  loginSuccess: (payload?: loginAction["payload"]) => loginAction;
  loginFailure: (payload?: loginAction["payload"]) => loginAction;
}

export const { Types, Creators } = createActions<
  DefaultActionTypesOverride,
  DefaultActionCreatorsOverride
>({
  loginRequest: ["payload"],
  loginSuccess: ["payload"],
  loginFailure: ["payload"],
});

const INITIAL_STATE = Immutable({
  isLogin: false,
});

const loginSuccess = (state = INITIAL_STATE, action: any) => ({
  ...state,
  ...action.payload,
});

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
});
