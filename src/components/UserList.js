import React from "react";
import UserListItem from "./UserListItem";
import "./UserList.css";

const UserList = (props) => {
  const users = props.userList.map(data => <UserListItem userData={data} expandUser={() => props.handleProfileExpand(data)} />)
  return (
    <>
      <div style={props.style}>
        <div className="page-header">
          <div className="page-title">PROFILES</div>
          <div className="btn-burger">
            <i className="fas fa-bars" />
          </div>
        </div>
        {users}
      </div>
    </>
  );
}

export default UserList;
