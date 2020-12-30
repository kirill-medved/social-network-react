import React from "react";
import Users from "./Users";
import { unfollow, follow, getUsers } from "../../redux/usersReducer";
import { connect } from "react-redux";

import Preloader from "../common/Preloader/Preloader";
import {
  getUsersS,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageCurrentPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageCurrentPageChange={this.onPageCurrentPageChange}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersS(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  unfollow,
  getUsers,
  follow,
})(UsersContainer);
