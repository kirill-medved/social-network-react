import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Users.module.css";
import userPhoto from "./../../../assets/images/userImage.jpg";

const User = ({ followingInProgress, unfollow, follow, user }) => {
  return (
    <div className={style.user__wrap}>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <img
            className={style.image}
            src={user.photos.small != null ? user.photos.small : userPhoto}
          />
        </NavLink>
        {user.followed ? (
          <button
            className={style.user__button_unfollow}
            disabled={followingInProgress.some((u) => u === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={style.user__button_follow}
            disabled={followingInProgress.some((u) => u === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.city"}</div>
          <div>{"user.location.country"}</div>
        </span>
      </div>
    </div>
  );
};

export default User;
