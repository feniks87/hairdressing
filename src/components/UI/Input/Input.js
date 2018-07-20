import React from 'react';
import './Input.css';

const input = ( props ) =>
    <div className="form-group">
        <label className="Label">{props.label}</label>
        <input type="text" className="Input"
            value={props.value}
               placeholder={props.placeholder}
            onChange={props.onChange} />
    </div>;

export default input;