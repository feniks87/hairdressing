import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import './App.css';
import { SignUpPage }  from "./containers/SignUpPage/SignUpPage";
import { LoginPage } from "./containers/LoginPage/LoginPage";
import { LogoutPage } from "./containers/LogoutPage/LogoutPage";
import { UserAccountPage } from "./containers/UserAccountPage/UserAccountPage";
import HomePage from "./containers/HomePage/HomePage";
import Layout from "./hoc/Layout/Layout";
import { ServicesPage } from "./containers/ServicesPage/ServicesPage";
import { BookingPage } from "./containers/BookingPage/BookingPage";
import { OurTeamPage } from "./containers/OurTeamPage/OurTeamPage";
import { ContactPage } from "./containers/ContactPage/ContactPage";

import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {

        return (
            <div>
                <Router history={history}>
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/services" component={ServicesPage} />
                            <Route path="/book-online" component={BookingPage} />
                            <Route path="/our-team" component={OurTeamPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/registration" component={SignUpPage} />
                            <Route path="/logout" component={LogoutPage} />
                            <Route path="/account" component={UserAccountPage} />
                        </Switch>
                    </Layout>
                </Router>
            </div>
        );
    }
}


const connectedApp = connect()(App);
export { connectedApp as App };
