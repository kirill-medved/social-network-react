import React, { useEffect, useState } from "react";
import profileinfo from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={profileinfo.status}>
      {editMode ? (
        <div>
          <input
            onChange={(e) => {
              onStatusChange(e);
            }}
            autoFocus={true}
            onBlur={() => {
              deactivateEditMode();
            }}
            value={status}
          />
        </div>
      ) : (
        <div>
          <span
            role="span"
            onDoubleClick={() => {
              activateEditMode();
            }}
          >
            {status || "-----"}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
