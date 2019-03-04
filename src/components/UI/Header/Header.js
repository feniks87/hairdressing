import React from 'react';
import './Header.css';

const heading = (props) => (
    <h4 className="Header">{props.children}</h4>
);

export default heading;