import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <HomePage/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
