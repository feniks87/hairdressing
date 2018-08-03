import React from 'react';
import './Button.css';

const button = (props) => (
    <button
        className="Button"
        disabled={props.disabled}
        type={props.type}
        onClick={props.onClick}>{props.children}
    </button>
);

export default button;