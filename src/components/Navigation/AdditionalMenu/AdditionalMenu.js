import React from 'react';
import './AdditionalMenu.css';
import AdditionalNavItem from './AdditionalNavItem/AdditionalNavItem';
import { Link } from 'react-router-dom';

const additionalMenu = () => (
    <div>
        <ul className="navbar-nav">
            <AdditionalNavItem><Link to="/login">Login</Link></AdditionalNavItem>
            <AdditionalNavItem><Link to="/registration">Sign Up</Link></AdditionalNavItem>
        </ul>

    </div>
);

export default additionalMenu;