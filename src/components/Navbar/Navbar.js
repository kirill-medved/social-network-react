import React from "react";
import navbar from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Havbar = () => {
  return (
    <nav className={navbar.navbar}>
      <ul className={navbar.items}>
        <li className={navbar.item}>
          <NavLink to="/profile" activeClassName={navbar.active}>
            Profile
          </NavLink>
        </li>
        <li className={navbar.item}>
          <NavLink to="/dialogs" activeClassName={navbar.active}>
            Messages
          </NavLink>
        </li>
        <li className={navbar.item}>
          <NavLink to="/users" activeClassName={navbar.active}>
            Users
          </NavLink>
        </li>
        <li className={navbar.item}>
          <NavLink to="/news" activeClassName={navbar.active}>
            News
          </NavLink>
        </li>
        <li className={navbar.item}>
          <NavLink to="/music" activeClassName={navbar.active}>
            Music
          </NavLink>
        </li>
        <li className={navbar.item}>
          <NavLink to="/settings" activeClassName={navbar.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Havbar;
