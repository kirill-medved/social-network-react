import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postsData: [
    { id: 1, content: "I want to find new friends!", likesCount: 11 },
    { id: 2, content: "I too))", likesCount: 35 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        content: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id != action.postId),
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserID = (userID) => {
  return async (dispatch) => {
    const data = await profileAPI.getUserID(userID);
    dispatch(setUserProfile(data));
  };
};

export const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserStatus = (userID) => {
  return async (dispatch) => {
    const data = await profileAPI.getUserStatus(userID);
    dispatch(setUserStatus(data));
  };
};

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    const data = await profileAPI.updateUserStatus(status);
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export default profileReducer;
