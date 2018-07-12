import React, { Component } from 'react';
import './ServicesPage.css';
import Heading from '../UI/Heading/Heading';
import TableItem from '../../components/UI/TableItem/TableItem';

const PATH_SERVICES = 'http://localhost:3000/api/services';

class ServicesPage extends Component {
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
            <div className="container  table-responsive">
                <Heading>Our Services</Heading>
                <div className="Services">
                    <table className="table table-striped">
                        <tbody>
                        {result.map(service =>
                            <TableItem serviceName={service.name} price={service.price}/>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

export  default ServicesPage;


