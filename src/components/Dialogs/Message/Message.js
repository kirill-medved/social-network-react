import React from "react";
import dialogs from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  return (
    <div className={`${dialogs.message}`}>
      <NavLink to="id" className={dialogs.message_user_icon}>
        <img
          src="https://img5tv.cdnvideo.ru/webp/shared/files/201708/1_569190.jpg"
          className={`${dialogs.dialogs_img}`}
        />
      </NavLink>
      {props.message}
    </div>
  );
};

export default Message;
