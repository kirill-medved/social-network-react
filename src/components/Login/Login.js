import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login, logout } from "../../redux/authReducer";
import LoginFormValidation from "./LoginFormValidation/LoginFormValidation";
import style from "./Login.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    let { login, password, rememberMe } = formData;

    props.login(login, password, rememberMe);
  };

  if (props.isAuth) return <Redirect to={"/profile"} />;

  return (
    <div className={style.login__wrap}>
      <h1>Login please!</h1>
      <LoginFormValidation onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
