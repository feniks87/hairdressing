import React from 'react';

const listItem = ( props ) => (
    <li onClick={props.onClick}>{props.value}</li>
);

export default listItem;