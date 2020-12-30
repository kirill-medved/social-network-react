import { successSession } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => (dispatch) => {
  Promise.all([dispatch(successSession())]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
