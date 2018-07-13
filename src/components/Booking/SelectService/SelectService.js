import React, { Component } from 'react';
import ListItem from '../../UI/ListItem/ListItem';
import { ListGroup } from 'reactstrap';
import Button from '../../UI/Button/Button';
import './SelectService.css';

const PATH_SERVICES = 'http://localhost:3000/api/services';

class SelectService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };

        this.setServices = this.setServices.bind(this);
    }

    setServices(result) {
        this.setState({ result });
    }

    componentDidMount() {
        fetch(`${PATH_SERVICES}`)
            .then(response => response.json())
            .then(result => this.setServices(result))
            .catch(error => console.log(error));
    }
    render() {
        const result = this.state.result;

        console.log(result);
        if (!result) { return null; }

        return (
                <div className="Form">
                    <ListGroup>
                        {result.map(service =>
                            <ListItem>{service.name} ({service.time} min)</ListItem>
                        )}
                    </ListGroup>
                    <Button>Next</Button>
                </div>
        );
    }
}

export  default SelectService;



