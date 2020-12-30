import React from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={header.wraper}>
      <header className={header.header}>
        <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
        <div className={header.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login}{" "}
              <button onClick={props.logout} className={header.button}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink to={"/login"} className={header.button}>
              Login
            </NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
