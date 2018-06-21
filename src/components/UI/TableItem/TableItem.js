import React from 'react';

const tableItem = (props) => (
        <tr>
            <td>{props.serviceName}</td>
            <td className="text-right">{props.price}</td>
        </tr>

);

export default tableItem;