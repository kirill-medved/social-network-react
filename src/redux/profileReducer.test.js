const {
  addPostActionCreator,
  default: profileReducer,
  deletePost,
} = require("./profileReducer");

let state = {
  postsData: [
    { id: 1, content: "I want to find new friends!", likesCount: 11 },
    { id: 2, content: "I too))", likesCount: 35 },
  ],
  profile: null,
  status: "",
};

it("new post test should be added", () => {
  let action = addPostActionCreator("Hi people!");
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});

it("new post test should have correct message", () => {
  let action = addPostActionCreator("Hi people!");
  let newState = profileReducer(state, action);
  expect(newState.postsData[2].content).toBe("Hi people!");
});

it("after deleting length should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(1);
});

it("after deleting length shouldm't be decrement if id isn't correct", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
});
