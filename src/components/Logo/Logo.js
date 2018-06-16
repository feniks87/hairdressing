import React from 'react';
import bkLogo from '../../assets/images/1.jpg';
import './Logo.css'

const logo = (props) => (
    <div className="Logo">
        <img src={bkLogo} alt="Logo" />
    </div>
);

export default logo;