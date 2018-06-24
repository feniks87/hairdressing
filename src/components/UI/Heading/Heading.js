import React from 'react';
import './Heading.css';

const heading = (props) => (
    <h4 className="Header">{props.children}</h4>
);

export default heading;