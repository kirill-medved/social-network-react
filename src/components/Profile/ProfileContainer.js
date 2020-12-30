import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserID,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = this.props.authrizedUserID;
      if (!userID) {
        this.props.history.push("/login");
      }
    }

    this.props.getUserID(userID);
    this.props.getUserStatus(userID);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authrizedUserID: state.auth.userID,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    getUserID,
    getUserStatus,
    updateUserStatus,
  })
)(ProfileContainer);
