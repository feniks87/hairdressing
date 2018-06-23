import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import MainMenu from '../MainMenu/MainMenu';
import AdditionalMenu from '../AdditionalMenu/AdditionalMenu'

const toolbar = (props) => (
    <header className="Toolbar">
        <nav className="navbar navbar-expand-sm">
            <Logo/>
        </nav>
        <nav className="navbar navbar-expand-sm">
            <MainMenu/>
        </nav>
        <nav className="navbar navbar-expand-sm">
            <AdditionalMenu/>
        </nav>
    </header>
)

export default toolbar;