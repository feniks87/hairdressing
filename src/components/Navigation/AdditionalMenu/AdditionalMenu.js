import React from 'react';
import NavItem from '../../UI/NavItem/NavItem';
import { Link } from 'react-router-dom';

const additionalMenu = () => (
    <ul className="navbar-nav">
        <NavItem><Link to="/login">Login</Link></NavItem>
        <NavItem><Link to="/registration">Sign Up</Link></NavItem>
    </ul>
);

export default additionalMenu;