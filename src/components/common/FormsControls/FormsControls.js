import React from "react";
import style from "./FormsControls.module.css";

export const FormTextarea = ({ input, meta, ...props }) => {
  const withSpanHasProblem =
    meta.touched &&
    ((meta.error && <span>{meta.error}</span>) ||
      (meta.warning && <span>{meta.warning}</span>));

  return (
    <div
      className={
        style.field +
        " " +
        (meta.touched && meta.error
          ? style.error
          : meta.warning
          ? style.warning
          : "")
      }
    >
      <textarea {...input} {...props} />
      {withSpanHasProblem}
    </div>
  );
};

export const FormInput = ({ input, meta, ...props }) => {
  const withSpanHasProblem =
    meta.touched &&
    ((meta.error && <span>{meta.error}</span>) ||
      (meta.warning && <span>{meta.warning}</span>));

  return (
    <div
      className={
        style.field +
        " " +
        (meta.touched && meta.error
          ? style.error
          : meta.warning
          ? style.warning
          : "")
      }
    >
      <input {...input} {...props} />
      {withSpanHasProblem}
    </div>
  );
};
