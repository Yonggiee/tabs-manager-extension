import React, { Component } from "react";
import logo from "./logo.svg";
import "./background";
import "./App.css";
import Main from "./components/main";

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
