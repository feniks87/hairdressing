import React from 'react';
import './MainNavItem.css'

const mainNavItem = (props) => (
    <li className="nav-item">
        <a className="nav-link" href={props.link}> {props.children}</a></li>
);

export default mainNavItem;