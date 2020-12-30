import React from "react";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
