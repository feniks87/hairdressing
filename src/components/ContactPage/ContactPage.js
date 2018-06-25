import React, { Component } from 'react';
import Heading from '../UI/Heading/Heading';
import BkLocation from '../../assets/images/location1.jpg';
import LittleBkLocation from '../../assets/images/location2.jpg';
import './ContactPage.css'
import ContactInfo from '../../components/ContactInfo/ContactInfo';


class ContactPage extends Component {
    render() {
        return (
            <div className="container">
                <Heading>Contact Us</Heading>
                <div className="row">
                    <ContactInfo
                        name="The BK Haidressing"
                        address="7/329 Albany Hwy, Rosedale, Auckland 0632"
                        phone="(09) 950-9994"/>
                    <ContactInfo
                        name="The Little BK Haidressing"
                        address="1 Raleigh Rd, Northcote,Auckland 0627"
                        phone="(09) 480-1390"/>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="Image-map img-fluid img-thumbnail" src={LittleBkLocation} alt="BK Location"/>
                    </div>
                    <div className="col-sm-6">
                        <img className="Image-map img-fluid img-thumbnail" src={LittleBkLocation} alt="Little BK Location"/>
                    </div>
                </div>
            </div>
        )
    }
}

export  default ContactPage;


