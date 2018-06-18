import React from 'react';
import './NavItems.css'

const navItem = (props) => (
    <li className="NavItem nav-item">
        <a className="nav-link" href={props.link}> {props.children}</a>
    </li>
);

export default navItem;