import React from 'react';
import './Input.css';

const input = ( props ) =>

    <div className="form-group">
        <label className="Label">{props.label}</label>
        <input className={ 'form-control' + (props.showError ? ' Invalid' : '')}
               value={props.value}
               placeholder={props.placeholder}
               onChange={props.onChange}
               type={props.type}
               name={props.name}/>
        {props.showError && <div className="Error-message">{props.errorMessage}</div>}
    </div>;

export default input;