import React from "react";
import UserListItem from "./UserListItem";
import "./UserList.scss";

const UserList = (props) => {
  const users = props.userList.map(data => (
    <UserListItem key={data.login.uuid} userData={data} expandUser={() => props.handleProfileExpand(data)} />
  ));
  
  return (
    <>
      <div className="user-list-page-container" style={props.style}>
        <div className="page-header">
          <div className="page-title">
            PROFILES
          </div>
          <div className="btn-burger">
            <i className="fas fa-bars" />
          </div>
        </div>
        <div className="user-list">
          {users}
        </div>
      </div>
    </>
  );
}

export default UserList;
