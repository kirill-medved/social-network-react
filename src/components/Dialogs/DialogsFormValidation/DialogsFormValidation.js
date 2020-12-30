import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormTextarea } from "../../common/FormsControls/FormsControls";
import dialogs from "./DialogsFormValidation.module.css";

const required = (value) => {
  if (value) return undefined;
  return "This field is required";
};

const maxLengthCreator = (number) => (value) => {
  if (value && value.length > number)
    return `Must be ${number} characters or less`;
  return undefined;
};

const maxLength200 = maxLengthCreator(200);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={dialogs.form}>
      <Field
        component={FormTextarea}
        name="message"
        validate={[required, maxLength200]}
        className={dialogs.form__field}
        placeholder="New message"
      />
      <button className={dialogs.button}>Send</button>
    </form>
  );
};

export default reduxForm({ form: "message" })(MessageForm);
