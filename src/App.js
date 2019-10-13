import React, { Component } from "react"
import Calulator from './component/Calculator'
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;

const Code = () => <div><Calulator/></div>;

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/code">
        <button>code</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/code" component={Code} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
