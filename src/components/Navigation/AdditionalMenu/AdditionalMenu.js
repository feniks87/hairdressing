import React from 'react';
import classes from './AdditionalMenu.css';
import AdditionalNavItem from './AdditionalNavItem/AdditionalNavItem';
import { Route, Link, Switch } from 'react-router-dom';
import Registration from '../../Registration/Registration';
import Login from '../../Login/Login';

const additionalMenu = () => (
    <div>
        <ul className="classes.NavItems">
            <AdditionalNavItem><Link to="/login">Login</Link></AdditionalNavItem>
            <AdditionalNavItem><Link to="/registration">Sign Up</Link></AdditionalNavItem>
        </ul>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
        </Switch>
    </div>
);

export default additionalMenu;