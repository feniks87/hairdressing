import React from 'react';
import './NavItems.css'

const navItem = (props) => (
    <li className="NavItem nav-item">
        {props.children}
    </li>
);

export default navItem;