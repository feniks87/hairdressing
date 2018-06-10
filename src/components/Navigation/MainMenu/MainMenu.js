import React from 'react';
import classes from './MainMenu.css';
import MainNavItem from './MainNavItem/MainNavItem';


const mainMenu = () => (
    <ul className={classes.NavItems}>
        <MainNavItem link="/" active>Home</MainNavItem>
        <MainNavItem link="/">About</MainNavItem>
        <MainNavItem link="/">Services</MainNavItem>
        <MainNavItem link="/">Book Online</MainNavItem>
        <MainNavItem link="/">Our Team</MainNavItem>
        <MainNavItem link="/">Contact</MainNavItem>
    </ul>
);

export default mainMenu;