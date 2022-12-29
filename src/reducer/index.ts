import { combineReducers } from "redux";
import userState from "./loginReducer";
const rootReducer = combineReducers({ userState });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
