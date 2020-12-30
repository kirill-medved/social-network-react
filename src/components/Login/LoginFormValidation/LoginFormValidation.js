import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormInput } from "../../common/FormsControls/FormsControls";
import style from "./../../common/FormsControls/FormsControls.module.css";
import login from "./../Login.module.css";
const required = (value) => {
  if (value) return undefined;
  return "This field is required";
};

const maxLengthCreator = (number) => (value) => {
  if (value && value.length > number)
    return `Must be ${number} characters or less`;
  return undefined;
};

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label >
          Login:
          <Field
            component={FormInput}
            name="login"
            type="text"
            validate={[required, maxLength20]}
          />
        </label>
      </div>
      <div>
        <label >
          Password:
          <Field
            component={FormInput}
            name="password"
            type="password"
            validate={[required, maxLength20]}
          />
        </label>
      </div>
      <div>
        <label className={login.login__field}>
          <Field
            component={FormInput}
            type="checkbox"
            name="rememberMe"
          />
          remember me
        </label>
      </div>
      {props.error && <div className={style.asyncError}>{props.error}</div>}
      <button className={login.button}>Sign up</button>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
