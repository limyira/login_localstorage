import { ActionType } from "typesafe-actions";

export const LOGIN = "user/login" as const;
type userData = {
  userID: string;
  loginSuccess: boolean;
};

export const loginSuccess = (data: userData) => ({
  type: LOGIN,
  payload: {
    loginSuccess: false,
    userID: data.userID,
  },
});

const actions = { loginSuccess };

export type TAction = ActionType<typeof loginSuccess>;
