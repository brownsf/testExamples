/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './component/Home';
import logo from './logo.svg';
import './App.css';

const MainMenu = () => (
  <div>
    <Link to="/">
      <button type="button">home</button>
    </Link>
    <Link to="/code">
      <button type="button">code</button>
    </Link>
  </div>
);

class App extends Component {
  render() {
    const setName = (name) => this.setState({ name });
    const { name } = this.state||{};
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
          <div className="container">
            <Route exact path="/" render={(props) => <Home {...props} setName={setName} />} />
            <Route exact path="/code" render={(props) => <Calculator name={name} {...props} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
