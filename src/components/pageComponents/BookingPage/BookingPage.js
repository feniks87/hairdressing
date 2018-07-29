import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading';
import SelectService from '../../Booking/SelectService/SelectService';

class BookingPage extends Component {

    render() {
        return (
            <div className="container">
                <Heading>Book Online</Heading>
                <SelectService/>
            </div>
        );
    }
}

export  default BookingPage;



