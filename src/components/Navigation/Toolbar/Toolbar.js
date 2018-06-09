import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../MainMenu/MainMenu';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <NavItems/>
        </nav>
    </header>
)

export default toolbar;