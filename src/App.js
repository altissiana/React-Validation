import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Thanks from "./Thanks"

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Form} />
          <Route path="/thanks" component={Thanks} />
        </div>
      </Router>
    );
  }
}

export default App;