import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Profiles from "./components/Profiles";

function App() {
  return (
    <div className="App">
      <Profiles />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
