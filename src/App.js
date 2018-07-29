import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import './App.css';
import { SignUpPage }  from "./components/pageComponents/SignUpPage/SignUpPage";
import { LoginPage } from "./components/pageComponents/LoginPage/LoginPage";
import { LogoutPage } from "./components/pageComponents/LogoutPage/LogoutPage";
import HomePage from "./components/pageComponents/HomePage/HomePage";
import Layout from "./hoc/Layout/Layout";
import { ServicesPage } from "./components/pageComponents/ServicesPage/ServicesPage";
import BookingPage from "./components/pageComponents/BookingPage/BookingPage";
import { OurTeamPage } from "./components/pageComponents/OurTeamPage/OurTeamPage";
import { ContactPage } from "./components/pageComponents/ContactPage/ContactPage";

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
                        </Switch>
                    </Layout>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    return {
        alert,
        authentication
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
