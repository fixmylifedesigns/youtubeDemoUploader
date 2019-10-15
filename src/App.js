import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Uploader from "./components/uploader";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>duranirving.com</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Uploader />
      </header>
    </div>
  );
}

export default App;
