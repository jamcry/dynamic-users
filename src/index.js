import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="profile-list-container">
        <UserList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
