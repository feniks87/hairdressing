import React, { Component } from 'react';
import ListItem from '../../UI/ListItem/ListItem';
import { ListGroup } from 'reactstrap';
import Button from '../../UI/Button/Button';
import './SelectStylist.css';

class SelectStylist extends Component {

    render() {
        const list = [
            {stylistName: 'Anna'},
            {stylistName: 'Bella'},
            {stylistName: 'Peter'},
            {stylistName: 'Valentina'},
        ];
        return (
            <div className="Form">
                <ListGroup>
                    {list.map(item =>
                        <ListItem>{item.stylistName}</ListItem>
                    )}
                </ListGroup>
                <Button>Next</Button>
            </div>
        );
    }
}

export  default SelectStylist;



