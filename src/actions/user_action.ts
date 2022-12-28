import axios from "axios";
import { ActionType, createReducer } from "typesafe-actions";
import { IForm } from "../router/Login";

const LOGIN_USER = "user/LOGIN_USER" as const;
const baseUrl = "http://localhost:3001";

type TuserData = {
  email: string;
  password: string;
};
export function loginUser(userData: TuserData) {
  const request = axios
    .post(`${baseUrl}/api/users/login`, userData)
    .then((response) => console.log(response));
  return {
    type: LOGIN_USER,
    payload: null,
  };
}

const actions = { loginUser };
export type TAction = ActionType<typeof actions>;

const loginState = (state: any = {}, action: TAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};

export default loginState;
