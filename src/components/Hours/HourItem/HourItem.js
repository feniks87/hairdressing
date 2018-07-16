import React from 'react';

const hoursItem = (props) => (
    <p className="text-center"> {props.day} : {props.startTime}am ~ {props.finishTime}pm</p>
);


export default hoursItem;