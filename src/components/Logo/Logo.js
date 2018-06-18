import React from 'react';
import { Router, Link } from 'react-router-dom';
import bkLogo from '../../assets/images/1.jpg';
import './Logo.css'
import HomePage from "../HomePage/HomePage";

const logo = (props) => (
    <div className="Logo">
        <a><Link to path="/"/>
            <img src={bkLogo} alt="Logo" />
        </a>


    </div>
);

export default logo;