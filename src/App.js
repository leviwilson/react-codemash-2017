import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Session extends Component {
  render() {
    const { title, abstract } = this.props
    return (
      <div>
        <div>{title}</div>
        <div>{abstract}</div>
      </div>
    )
  }
}

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Session
          title="7 Languages"
          abstract="YAY" />
        <Session
          title="React everywhere"
          abstract="Yarn is slow" />
      </div>
    );
  }
}

export default App;
