import React from 'react';
import './Input.css';

const input = ( props ) =>
    <div className="Input">
        <label className="Label">{props.label}</label>
        <input
            className="Input"
            value={props.value}
            onChange={props.changed} />
    </div>;

export default input;