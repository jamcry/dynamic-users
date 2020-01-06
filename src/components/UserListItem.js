import React from "react";
import "./UserListItem.scss";

const UserListItem = (props) => {
  const profile = props.userData;
  const fullName = profile.name.first + " " + profile.name.last;
  const imageUrl = profile.picture.medium;
  const age = profile.dob.age;

  return (
    <div className="profile-list-item">
      <div className="profile-photo-container">
        <img src={imageUrl} alt="profile" />
      </div>
      <div className="user-fullname">
        <span>
          {fullName}, {age}
        </span>
      </div>
      <div className="profile-action" onClick={props.expandUser}>
        <i className="fas fa-chevron-right" />
      </div>
    </div>
  );
}

export default UserListItem;
