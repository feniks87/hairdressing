import React from 'react';
import bkLogo from '../../assets/images/logo.jpg';
import './Logo.css'

const logo = (props) => (
    <img className="Logo rounded" src={bkLogo} alt="Logo" />
);

export default logo;