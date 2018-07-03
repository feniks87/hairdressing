import React from 'react';
import './TableItem.css';

const tableItem = (props) => (
        <tr className="TableItem">
            <td>{props.serviceName}</td>
            <td className="text-right">{props.price}</td>
        </tr>

);

export default tableItem;