import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormTextarea } from "../../../common/FormsControls/FormsControls";
import form from "./PostFormValidation.module.css";

const required = (value) => {
  if (value) return undefined;
  return "This field is required";
};

const maxLengthCreator = (number) => (value) => {
  if (value && value.length > number)
    return `Must be ${number} characters or less`;
  return undefined;
};

const maxLength50 = maxLengthCreator(50);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={form.form}>
      <Field
        component={FormTextarea}
        name="post"
        validate={[required, maxLength50]}
        placeholder="New post"
      />
      <button className={form.button}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "post" })(PostForm);
