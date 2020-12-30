import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN_AUTHORIZE = "LOGIN_AUTHORIZE";

let initialState = {
  userID: null,
  email: null,
  login: null,
  password: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case LOGIN_AUTHORIZE: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userID, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userID, email, login, isAuth },
});

export const successSession = () => {
  return async (dispatch) => {
    const data = await authAPI.me();
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(successSession());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error!";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
