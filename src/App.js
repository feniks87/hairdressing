import React, { Component } from 'react';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration'


class App extends Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <Login/>
        <Registration/>
      </div>
    );
  }
}

export default App;
