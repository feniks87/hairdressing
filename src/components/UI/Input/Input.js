import React from 'react';
import './Input.css';

const input = ( props ) =>
    <div className="form-group">
        <label className="Label">{props.label}</label>
        <input className="form-control"
            value={props.value}
            onChange={props.changed} />
    </div>;

export default input;