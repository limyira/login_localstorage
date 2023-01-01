import { ActionType } from "typesafe-actions";

export const LOGIN = "user/login" as const;

export const LOGIN_DATA = "user/login_data" as const;
export const AUTH_DATA = "user/auth_data" as const;
export const LOGOUT_REQUEST = "user/logout" as const;

type userData = {
  userID: string;
  loginSuccess: boolean;
};

export type authData = {
  _id: string;
  isAuth: boolean;
  email: string;
};

export const loginSuccess = (data: userData) => ({
  type: LOGIN,
  payload: {
    loginSuccess: data.loginSuccess,
    userID: data.userID,
  },
});

export const authResponse = (data: authData) => ({
  type: AUTH_DATA,
  payload: {
    _id: data._id,
    isAuth: data.isAuth,
    email: data.email,
  },
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const actions = { loginSuccess, authResponse, logoutRequest };

export type TAction = ActionType<typeof actions>;
