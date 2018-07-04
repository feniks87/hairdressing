import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LoginPage from "./components/pageComponents/LoginPage/LoginPage";
import HomePage from "./components/pageComponents/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import BookingPage from "./components/pageComponents/BookingPage/BookingPage";
import OurTeamPage from "./components/pageComponents/OurTeamPage/OurTeamPage";
import ContactPage from "./components/pageComponents/ContactPage/ContactPage";


class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/book-online" component={BookingPage} />
                    <Route path="/our-team" component={OurTeamPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/registration" component={SignUpPage} />
                </Switch>
            </Layout>
        </div>
    );
  }
}

export default App;
