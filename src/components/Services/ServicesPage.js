import React, { Component } from 'react';
import './ServicesPage.css'
import Header from '../../components/UI/Header/Header';
import TableItem from '../../components/UI/TableItem/TableItem';


class ServicesPage extends Component {
    render() {
        const list = [
            {
                serviceName: 'Haircut (women)',
                price: '35 $',
            },
            {
                serviceName: 'Haircut (men)',
                price: '25 $',
            }
        ];

        return (
            <div className="container table-responsive">
                <Header>Our Services</Header>
                <table className="table table-striped">
                    <tbody>
                    {list.map(item =>
                        <TableItem serviceName={item.serviceName} price={item.price}/>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
};

export  default ServicesPage;


