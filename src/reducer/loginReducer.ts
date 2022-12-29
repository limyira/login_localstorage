import { LOGIN, TAction } from "../actions/actions";

type TinitialState = {
  userID: string;
  loginSuccess: boolean;
};

const initialState = {
  userID: "",
  loginSuccess: false,
};

function userState(state: TinitialState = initialState, action: TAction) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload.userID,
        loginSuccess: action.payload.loginSuccess,
      };
    default:
      return state;
  }
}

export default userState;
