import { combineReducers } from "redux";
import loginState from "../actions/user_action";
const rootReducer = combineReducers({ loginState });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
