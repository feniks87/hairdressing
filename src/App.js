import React, { Component } from 'react';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Login from './components/Login/Login'


class App extends Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <Login/>
      </div>
    );
  }
}

export default App;
