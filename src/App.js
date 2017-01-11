import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Session from './Session'

class SessionList extends Component {
  render() {
    const { sessions } = this.props

    return (
      <div>
        { sessions.map(s => <Session key={s.Id} { ...s} />) }
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { sessions: [] }

    window.fetch("./sessions.json").then((response) => {
        response.json().then((json) => {
          this.setState({ sessions: json })
          console.log(this.state.sessions[0])
        })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <SessionList sessions={this.state.sessions} />
      </div>
    );
  }
}

export default App;
