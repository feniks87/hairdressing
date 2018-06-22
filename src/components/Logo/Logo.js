import React from 'react';
import { Link } from 'react-router-dom';
import bkLogo from '../../assets/images/logo.jpg';
import './Logo.css'

const logo = (props) => (
   <a className="navbar-brand"><Link to="/"></Link>
       <img className="Logo rounded" src={bkLogo} alt="Logo" />
   </a>
);

export default logo;