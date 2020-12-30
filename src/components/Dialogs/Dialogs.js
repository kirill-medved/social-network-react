import React from "react";
import dialogs from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import DialogsFormValidation from "./DialogsFormValidation/DialogsFormValidation";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let sendMessage = (formData) => {
    props.addMessage(formData.message);
  };

  return (
    <section className={`${dialogs.dialogs}`}>
      <div className={`${dialogs.dialogs_items_wrapper}`}>
        <div className={`${dialogs.dialogs_items}`}>{dialogsElements}</div>
      </div>
      <div className={`${dialogs.messages_wrapper}`}>
        <div className={`${dialogs.messages}`}>{messagesElements}</div>
        <DialogsFormValidation onSubmit={sendMessage} />
      </div>
    </section>
  );
};

export default Dialogs;
