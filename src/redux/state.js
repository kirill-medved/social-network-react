import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, content: "I want to find new friends!", likesCount: 11 },
        { id: 2, content: "I too))", likesCount: 35 },
      ],
      newPostText: "",
    },
    messagesPage: {
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Not bad, and you?" },
        { id: 4, message: "I'm to. Do you want to play cs go?" },
        { id: 5, message: "Let's go!" },
      ],
      dialogsData: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Kirill" },
        { id: 3, name: "Kris" },
        { id: 4, name: "Vlad" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("I'm changing state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
