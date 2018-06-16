import React from 'react';
import './AdditionalNavItem.css'


const additionalNavItem = (props) => (
    <li className="NavItem">
        <a href={props.link}> {props.children}</a></li>
)

export default additionalNavItem;