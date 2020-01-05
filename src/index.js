import React from "react";
import ReactDOM from "react-dom";
import Profiles from "./components/Profiles";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Profiles />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
