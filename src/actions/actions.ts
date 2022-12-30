import { ActionType } from "typesafe-actions";

export const LOGIN = "user/login" as const;

export const LOGIN_DATA = "user/login_data" as const;

type userData = {
  userID: string;
  loginSuccess: boolean;
};

export const loginSuccess = (data: userData) => ({
  type: LOGIN,
  payload: {
    loginSuccess: data.loginSuccess,
    userID: data.userID,
  },
});

const actions = { loginSuccess };

export type TAction = ActionType<typeof actions>;
