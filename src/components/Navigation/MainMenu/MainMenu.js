import React from 'react';
import classes from './MainMenu.css';
import NavItem from './NavItem/NavItem';


const mainMenu = () => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active>Home</NavItem>
        <NavItem link="/">About</NavItem>
        <NavItem link="/">Services</NavItem>
        <NavItem link="/">Our Team</NavItem>
        <NavItem link="/">Contact</NavItem>
    </ul>
);

export default mainMenu;