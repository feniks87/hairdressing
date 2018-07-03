import React from 'react';
import './ListItem.css';
import { ListGroupItem  } from 'reactstrap';

const listItem = (props) => (
        <ListGroupItem className="ListItem">{props.children}</ListGroupItem>
);

export default listItem;