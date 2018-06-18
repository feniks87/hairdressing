import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../../UI/NavItem/NavItem';


const mainMenu = () => (
    <div>
        <ul className="navbar-nav">
            <NavItem><Link to="/home">Home</Link></NavItem>
            <NavItem link="/">About</NavItem>
            <NavItem link="/">Services</NavItem>
            <NavItem link="/">Book Online</NavItem>
            <NavItem link="/">Our Team</NavItem>
            <NavItem link="/">Contact</NavItem>
        </ul>
    </div>
);

export default mainMenu;