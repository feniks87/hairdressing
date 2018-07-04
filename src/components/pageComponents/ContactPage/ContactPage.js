import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading';
import BkLocation from '../../../assets/images/location1.jpg';
import LittleBkLocation from '../../../assets/images/location2.jpg';
import './ContactPage.css'
import ContactInfo from '../../../components/ContactInfo/ContactInfo';
import Hours from '../../../components/Hours/Hours';

class ContactPage extends Component {
    render() {
        const bkHours = [
            {
                weekDay: 'Monday',
                hours: '9am ~ 6pm',
            },
            {
                weekDay: 'Tuesday',
                hours: '9am ~ 6pm',
            },
            {
                weekDay: 'Wednesday',
                hours: '9am ~ 6pm',
            },
            {
                weekDay: 'Thursday',
                hours: '9am ~ 6pm',
            },
            {
                weekDay: 'Friday',
                hours: '9am ~ 7pm',
            },
            {
                weekDay: 'Saturday',
                hours: '9am ~ 6pm',
            },
            {
                weekDay: 'Sunday',
                hours: '12am ~ 5pm',
            },
        ];

        const littleBkHours = [
            {
                weekDay: 'Monday',
                hours: 'Closed',
            },
            {
                weekDay: 'Tuesday',
                hours: '9:30am ~ 5:30pm',
            },
            {
                weekDay: 'Wednesday',
                hours: '9:30am ~ 5:30pm',
            },
            {
                weekDay: 'Thursday',
                hours: '9:30am ~ 5:30pm',
            },
            {
                weekDay: 'Friday',
                hours: '9:30am ~ 5:30pm',
            },
            {
                weekDay: 'Saturday',
                hours: '9:30am ~ 5:30pm',
            },
            {
                weekDay: 'Sunday',
                hours: 'Closed'
            },
        ];

        return (
            <div className="container">
                <Heading>Contact Us</Heading>
                <div className="row">
                    <ContactInfo
                        name="The BK Haidressing"
                        address="7/329 Albany Hwy, Rosedale, Auckland 0632"
                        phone="(09) 950-9994" />
                    <ContactInfo
                        name="The Little BK Haidressing"
                        address="1 Raleigh Rd, Northcote,Auckland 0627"
                        phone="(09) 480-1390"/>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="Image-map img-fluid img-thumbnail" src={BkLocation} alt="BK Location"/>
                    </div>
                    <div className="col-sm-6">
                        <img className="Image-map img-fluid img-thumbnail" src={LittleBkLocation} alt="Little BK Location"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="Heading-hours text-center">Hours</h5>
                        {bkHours.map(item =>
                        <Hours weekDay={item.weekDay}  hours={item.hours} />
                    )}
                    </div>
                    <div className="col-sm-6">
                        <h5 className="Heading-hours text-center">Hours</h5>
                        {littleBkHours.map(item =>
                            <Hours weekDay={item.weekDay}  hours={item.hours} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export  default ContactPage;


