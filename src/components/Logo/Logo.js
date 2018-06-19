import React from 'react';
import { Router, Link } from 'react-router-dom';
import bkLogo from '../../assets/images/1.jpg';
import './Logo.css'

const logo = (props) => (
    <div className="Logo">
        <a><Link to path="/"/>
            <img className="img-fluid rounded" src={bkLogo} alt="Logo" />
        </a>


    </div>
);

export default logo;