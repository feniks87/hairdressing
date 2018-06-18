import React from 'react';
import './MainMenu.css';
import MainNavItem from './MainNavItem/MainNavItem';


const mainMenu = () => (
    <ul className="navbar-nav">
        <MainNavItem link="/" active>Home</MainNavItem>
        <MainNavItem link="/">About</MainNavItem>
        <MainNavItem link="/">Services</MainNavItem>
        <MainNavItem link="/">Book Online</MainNavItem>
        <MainNavItem link="/">Our Team</MainNavItem>
        <MainNavItem link="/">Contact</MainNavItem>
    </ul>
);

export default mainMenu;