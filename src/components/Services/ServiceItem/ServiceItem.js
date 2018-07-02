import React from 'react';
import { FormGroup, Label, CustomInput } from 'reactstrap';

const serviceItem = (props) => (
        <div>
            <CustomInput type="checkbox" id={props.id} label={props.serviceName} />
        </div>
);

export default serviceItem;