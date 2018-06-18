import React from 'react';
import NavItem from '../../UI/NavItem/NavItem';


const mainMenu = () => (
    <div>
        <ul className="navbar-nav">
            <NavItem link="/" active>Home</NavItem>
            <NavItem link="/">About</NavItem>
            <NavItem link="/">Services</NavItem>
            <NavItem link="/">Book Online</NavItem>
            <NavItem link="/">Our Team</NavItem>
            <NavItem link="/">Contact</NavItem>
        </ul>
    </div>
);

export default mainMenu;