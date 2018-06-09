import React from 'react';
import classes from './AdditionalNavItem.css'


const additionalNavItem = (props) => (
    <li className={classes.NavItem}>
        <a
            href={props.link}> {props.children}</a></li>
)

export default additionalNavItem;