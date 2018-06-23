import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./hoc/Layout/Layout";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicesPage from "./components/Services/ServicesPage";
import BookingPage from "./components/BookingPage/BookingPage";
import OurTeamPage from "./components/OurTeamPage/OurTeamPage";
import ContactPage from "./components/ContactPage/ContactPage";

class App extends Component {
  render() {
    return (
        <div >
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/book-online" component={BookingPage} />
                    <Route path="/our-team" component={OurTeamPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </Layout>
        </div>
    );
  }
}

export default App;
