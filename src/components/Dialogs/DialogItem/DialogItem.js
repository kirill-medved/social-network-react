import React from "react";
import dialogs from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${dialogs.dialogs_item}`}>
      <NavLink to="id" className={dialogs.dialogs_user_img}>
        <img
          src="https://img5tv.cdnvideo.ru/webp/shared/files/201708/1_569190.jpg"
          className={`${dialogs.dialogs_img}`}
        />
      </NavLink>
      <NavLink to={path} className={dialogs.dialogs_user}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
