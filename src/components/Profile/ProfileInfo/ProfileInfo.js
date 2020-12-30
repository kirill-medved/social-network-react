import React from "react";
import profileinfo from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={profileinfo.bgImage}>
      <img
        // src="https://img.gazeta.ru/files3/723/11725723/urod-pic685-685x390-29509.jpg"
        src={props.profile.photos.large}
        className={profileinfo.profilePhoto}
      />
      <ProfileStatus
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <div className={profileinfo.profileInfo}>description</div>
    </div>
  );
};

export default ProfileInfo;
