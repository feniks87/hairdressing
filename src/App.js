import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./hoc/Layout/Layout";
import Toolbar from './components/Navigation/Toolbar/Toolbar'

class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </Layout>
        </div>
    );
  }
}

export default App;
