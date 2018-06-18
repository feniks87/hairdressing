import React from 'react';
import NavItem from '../../UI/NavItem/NavItem';
import { Link } from 'react-router-dom';

const additionalMenu = () => (
    <div>
        <ul className="navbar-nav">
            <NavItem><Link to="/login">Login</Link></NavItem>
            <NavItem><Link to="/registration">Sign Up</Link></NavItem>
        </ul>
    </div>
);

export default additionalMenu;