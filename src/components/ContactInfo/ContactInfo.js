import React from 'react';
import Aux from '../../hoc/Auxiliary/_Aux'

const contactInfo = (props) => (
    <Aux className="text-center">
        <h5 className="text-center">{props.name}</h5>
        <p className="text-center">{props.address}</p>
        <p className="text-center">Call {props.phone} for appointments!</p>
    </Aux>
);

export default contactInfo;
