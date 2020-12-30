const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 6,
        message: action.message,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export default dialogsReducer;
