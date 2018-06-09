import React from 'react';
import bkLogo from '../../assets/images/1.jpg';
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={bkLogo} alt="Logo" />
    </div>
);

export default logo;