import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../../UI/NavItem/NavItem';


const mainMenu = () => (
    <ul className="navbar-nav">
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/services">Services</Link></NavItem>
        <NavItem><Link to="/book-online">Book Online</Link></NavItem>
        <NavItem><Link to="/our-team">Our Team</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
    </ul>
);

export default mainMenu;