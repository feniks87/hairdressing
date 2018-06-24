import React, { Component } from 'react';
import Heading from '../UI/Heading/Heading';
import BkLocation from '../../assets/images/location1.jpg';
import LittleBkLocation from '../../assets/images/location2.jpg';
import './ContactPage.css'


class ContactPage extends Component {
    render() {
        return (
            <div className="container">
                <Heading>Contact Us</Heading>
                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="text-center">The BK Haidressing</h5>
                        <p className="text-center">7/329 Albany Hwy, Rosedale, Auckland 0632</p>
                        <p className="text-center">Call (09) 950-9994 for appointments!</p>
                        <img className="img-fluid img-thumbnail" src={BkLocation} alt="BK Location"/>
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center">The Little BK Haidressing</h5>
                        <p className="text-center">1 Raleigh Rd, Northcote,Auckland 0627</p>
                        <p className="text-center">Call (09) 480-1390 for appointments!</p>
                        <img className="image-fluid img-thumbnail" src={LittleBkLocation} alt="Little BK Location"/>
                    </div>
                </div>
            </div>
        )
    }
}

export  default ContactPage;


