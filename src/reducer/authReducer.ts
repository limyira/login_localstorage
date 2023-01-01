import {
  TAction,
  authData,
  AUTH_DATA,
  LOGOUT_REQUEST,
} from "../actions/actions";

const initialState: authData = {
  email: "",
  isAuth: false,
  _id: "",
};

const authReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case AUTH_DATA:
      return {
        ...state,
        email: action.payload.email,
        _id: action.payload._id,
        isAuth: action.payload.isAuth,
      };
    case LOGOUT_REQUEST:
      return { ...state, isAuth: false, email: "", _id: "" };

    default:
      return state;
  }
};

export default authReducer;
