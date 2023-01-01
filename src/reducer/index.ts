import { combineReducers } from "redux";
import userState from "./loginReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({ userState, authReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
