import React from 'react';
import classes from './AdditionalMenu.css'
import AdditionalNavItem from './AdditionalNavItem/AdditionalNavItem';

const additionalMenu = () => (
    <ul className={classes.NavItems}>
        <AdditionalNavItem link="/" active>Login</AdditionalNavItem>
        <AdditionalNavItem link="/">Sign Up</AdditionalNavItem>
    </ul>
);

export default additionalMenu;