import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import MainMenu from '../MainMenu/MainMenu';
import AdditionalMenu from '../AdditionalMenu/AdditionalMenu'

const toolbar = (props) => (
    <header className="Toolbar">
        <Logo />
        <nav>
            <MainMenu/>
        </nav>
        <nav>
            <AdditionalMenu/>
        </nav>
    </header>
)

export default toolbar;