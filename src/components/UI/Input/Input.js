import React from 'react';
import classes from './Input.css';

const input = ( props ) =>
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        <input
            className={classes.Input}
            value={props.value}
            onChange={props.changed} />
    </div>;

export default input;