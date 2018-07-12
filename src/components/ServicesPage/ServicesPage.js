import React, { Component } from 'react';
import './ServicesPage.css';
import Heading from '../UI/Heading/Heading';
import TableItem from '../../components/UI/TableItem/TableItem';


class ServicesPage extends Component {
    render() {
        const PATH_BASE = 'http://localhost:3000/api/services';
        const list = [
            {
                serviceName: 'Women Haircut',
                price: '35 $',
            },
            {
                serviceName: 'Men Haircut',
                price: '25 $',
            },
            {
                serviceName: 'Kids Haircut',
                price: '17 $',
            },
            {
                serviceName: 'Blow Dry',
                price: '10 $',
            },
            {
                serviceName: 'Root Touch Up',
                price: '60 $',
            },
            {
                serviceName: 'Single Process Color',
                price: '100 $',
            },
            {
                serviceName: 'Partial Highlighting',
                price: '125 $',
            },
            {
                serviceName: 'Full Highlighting',
                price: '150 $',
            },
            {
                serviceName: 'Ombre/Balayage',
                price: '150 $',
            },
            {
                serviceName: 'Bleach and Tone ',
                price: '125 $',
            },
            {
                serviceName: 'Toner ',
                price: '20 $',
            },
        ];

        return (
            <div className="container  table-responsive">
                <Heading>Our Services</Heading>
                <div className="Services">
                    <table className="table table-striped">
                        <tbody>
                        {list.map(item =>
                            <TableItem serviceName={item.serviceName} price={item.price}/>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

export  default ServicesPage;


