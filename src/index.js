import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList";

import "./index.css";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  const showList = true;
  const showProfile = true;
  return (
    <div className="App">
      {showList && (
        <div className="profile-list-container">
          <UserList />
        </div>
      )}
      {showProfile && (
        <div className="profile-list-container">
          <ProfileDetails />
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
