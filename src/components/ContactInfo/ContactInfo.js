import React from 'react';

const contactInfo = (props) => (
    <div>
        <h5 className="text-center">{props.name}</h5>
        <p className="text-center">{props.address}</p>
        <p className="text-center">Call {props.phone} for appointments!</p>
    </div>
);

export default contactInfo;
