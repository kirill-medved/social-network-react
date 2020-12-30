import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import style from "./Users.module.css";

let Users = (props) => {
  return (
    <div className={style.users_wrap}>
      {props.users.map((user) => (
        <User
          key={user.id}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          user={user}
        />
      ))}
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageCurrentPageChange={props.onPageCurrentPageChange}
      />
    </div>
  );
};

export default Users;
