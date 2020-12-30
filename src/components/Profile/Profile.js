import React from "react";
import profile from "./Profile.module.css";
import ProgileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main className={profile.content}>
      <ProgileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
