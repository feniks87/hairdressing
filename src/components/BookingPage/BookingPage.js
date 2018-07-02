import React, { Component } from 'react';
import ServiceItem from '../../components/Services/ServiceItem/ServiceItem';
import { Form, FormGroup, Label } from 'reactstrap';
import Heading from '../UI/Heading/Heading';
import Button from '../../components/UI/Button/Button';
import './BookingPage.css'

class BookingPage extends Component {

    render() {
        const list = [
            {
                serviceName: 'Women Haircut',
                id: "1"
            },
            {
                serviceName: 'Men Haircut',
                id: "2"
            },
            {
                serviceName: 'Kids Haircut',
                id: "3"
            },
            {
                serviceName: 'Blow Dry',
                id: "4"
            },
            {
                serviceName: 'Root Touch Up',
                id: "5"
            },
            {
                serviceName: 'Single Process Color',
                id: "6"
            },
            {
                serviceName: 'Partial Highlighting',
                id: "7"
            },
            {
                serviceName: 'Full Highlighting',
                id: "8"
            },
            {
                serviceName: 'Ombre/Balayage',
                id: "9"
            },
            {
                serviceName: 'Bleach and Tone',
                id: "10"
            },
            {
                serviceName: 'Toner',
                id: "11"
            }
        ];
        return (
            <div className="container">
                <Heading>Book Online</Heading>
                <Form className="Form">
                    <FormGroup>
                        <Label for="Checkbox">Select services</Label>
                        {list.map(item =>
                            <ServiceItem id={item.id} serviceName={item.serviceName} />)}
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export  default BookingPage;



