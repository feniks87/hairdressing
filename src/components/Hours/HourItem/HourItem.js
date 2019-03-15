import React from 'react';

const hoursItem = (props) => (
    <p className="text-center m-0"> {props.day} : {props.startTime} ~ {props.finishTime}</p>
);

export default hoursItem;