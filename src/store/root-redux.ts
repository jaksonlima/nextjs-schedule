import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./login";

export default combineReducers({
  login: loginReducer,
});
