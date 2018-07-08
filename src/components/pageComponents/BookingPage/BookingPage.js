import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading';
import ChoosingService from '../../../components/Booking/ChoosingService/ChoosingService';
class BookingPage extends Component {

    render() {
        return (
            <div className="container">
                <Heading>Book Online</Heading>
                <ChoosingService/>
            </div>
        );
    }
}

export  default BookingPage;



