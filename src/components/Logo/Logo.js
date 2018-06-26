import React from 'react';
import { Link } from 'react-router-dom';
import bkLogo from '../../assets/images/logo.jpg';
import './Logo.css'

const logo = (props) => (
   <Link to="/" className="navbar-brand">
       <img className="Logo rounded" src={bkLogo} alt="Logo" />
   </Link>
);

export default logo;