import React from 'react';
import './Input.css';

const input = ( props ) =>
    <div className="form-group">
        <label className="Label">{props.label}</label>
        <input className="Input"
            value={props.value}
               placeholder={props.placeholder}
            onChange={props.changed} />
    </div>;

export default input;