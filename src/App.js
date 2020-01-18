import React, { Component } from "react";
import logo from "./logo.svg";
import "./background";
import "./App.css";
import Main from "./components/Main";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Main></Main>
      </React.Fragment>
    );
  }
}

export default App;

{
  /* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>; */
}
