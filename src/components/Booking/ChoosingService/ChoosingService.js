import React, { Component } from 'react';
import ListItem from '../../UI/ListItem/ListItem';
import { ListGroup } from 'reactstrap';
import Button from '../../UI/Button/Button';
import './ChoosingService.css';

class ChoosingService extends Component {

    render() {
        const list = [
            {
                serviceName: 'Women Haircut',
                time: "(30min)"
            },
            {
                serviceName: 'Men Haircut',
                time: "(30min)"
            },
            {
                serviceName: 'Kids Haircut',
                time: "(30min)"
            },
            {
                serviceName: 'Blow Dry',
                time: "(20min)"
            },
            {
                serviceName: 'Root Touch Up',
                time: "(60min)"
            },
            {
                serviceName: 'Single Process Color',
                time: "(60min)"
            },
            {
                serviceName: 'Partial Highlighting',
                time: "(60min)"
            },
            {
                serviceName: 'Full Highlighting',
                time: "(90min)"
            },
            {
                serviceName: 'Ombre/Balayage',
                time: "(90min)"
            },
            {
                serviceName: 'Bleach and Tone',
                time: "(90min)"
            },
            {
                serviceName: 'Toner',
                time: "(30min)"
            }
        ];
        return (
                <div className="Form">
                    <ListGroup>
                        {list.map(item =>
                            <ListItem>{item.serviceName} {item.time}</ListItem>
                        )}
                    </ListGroup>
                    <Button>Next</Button>
                </div>
        );
    }
}

export  default ChoosingService;



