import React from 'react';
import './AdditionalNavItem.css'


const additionalNavItem = (props) => (
    <li className="nav-item">
        <a className="nav-link" href={props.link}> {props.children}</a></li>
)

export default additionalNavItem;