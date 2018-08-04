
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {alertActions} from '../../../_actions/alert.actions';
import Heading from '../../UI/Heading/Heading';

import Button from '../../UI/Button/Button';

import DatePicker from 'react-datepicker';

import moment  from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class WizardFormThirdPage extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.generateExcludeTime = this.generateExcludeTime.bind(this);

        const weekDay = moment().format('dddd').toUpperCase();
        const hoursInfo = props.hours.find((h) => h.day.toUpperCase() === weekDay);

        this.state = {
            selectedTime: null,
            startTime: moment().hours(hoursInfo.startHour).minutes(hoursInfo.startMinutes).seconds(0).milliseconds(0),
            endTime: moment().hours(hoursInfo.finishHour).minutes(hoursInfo.finishMinutes).seconds(0).milliseconds(0),
            step: 30,
        };
    }

    componentDidMount() {
        this.handleChange(moment());
    }

    generateExcludeTime(startTime, step, endTime) {
        if (startTime == null || step == null || endTime == null
            || (startTime.get('hour') === endTime.get('hour') && startTime.get('minute') === endTime.get('minute'))) {
            return [];
        }

        let result = [];

        let currentTime = startTime.clone();

        while (currentTime < endTime) {
            console.log(currentTime.toString());
            result.push(currentTime.clone());
            currentTime.add(step, 'minutes');
        }

        return result;
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.selectedTime);
    }

    handleChange(date) {
        const weekDay = date.format('dddd').toUpperCase();
        const hoursInfo = this.props.hours.find((h) => h.day.toUpperCase() === weekDay);

        let excludeTime = [];

        let selectedDateBookings = this.props.bookings.filter((b) => {
            let bookedTime = moment(b.time);
            return bookedTime.get('year') === date.get('year')
                && bookedTime.get('month') === date.get('month')
                && bookedTime.get('date') === date.get('date');
        });

        console.log(this.props.bookings);
        console.log(selectedDateBookings);
        selectedDateBookings.forEach((b) => {
            const duration = b.services.reduce((accumulator, serviceId) => {
                let service = this.props.services.find((s) => s.id === serviceId);
                console.log(service.time);
                return accumulator + service.time;
            }, 0);
            console.log(duration);
            let bookedTime = moment(b.time);

            let exclude = this.generateExcludeTime(bookedTime, 30, bookedTime.clone().add(duration, 'minutes'));
            excludeTime = [...excludeTime, ...exclude];
        });
        console.log(excludeTime);

        this.setState({
            selectedTime: date,
            startTime: moment().hours(hoursInfo.startHour).minutes(hoursInfo.startMinutes).seconds(0).milliseconds(0),
            endTime: moment().hours(hoursInfo.finishHour).minutes(hoursInfo.finishMinutes).seconds(0).milliseconds(0),
            excludeTime: excludeTime,
        });
    }

    render() {
        const hours = this.props.hours;
        if (!hours || hours.length === 0) { return null; }

        return (
            <div className="container ">
                <Heading>Choose date and time</Heading>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className='text-center'>
                        <style>
                            {`.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
                            padding-left: 0;
                            padding-right: 0;
                        }`}
                        </style>
                        <DatePicker  autoFocus readOnly popperPlacement="bottom-start"
                                     popperModifiers={{
                                         offset: {
                                             enabled: true,
                                             offset: '0px, 12px'
                                         },
                                         preventOverflow: {
                                             enabled: true,
                                             escapeWithReference: false,
                                             boundariesElement: 'viewport'
                                         }
                                     }}
                                     selected={this.state.selectedTime}
                                     onChange={this.handleChange}
                                     minDate={moment()}
                                     maxDate={moment().add(1, "months")}
                                     minTime={this.state.startTime}
                                     maxTime={this.state.endTime}
                                     excludeTimes={this.state.excludeTime}
                                     showDisabledMonthNavigation
                                     showTimeSelect
                                     inline
                        />
                        <p> { this.state.selectedTime
                            ? `Selected date and time: ${this.state.selectedTime.format('MMMM Do YYYY, h:mm a').toString()}`
                            : 'Please select available time'
                        }
                        </p>
                    </div>

                    <div>
                        <Button type="submit">Book</Button>
                        <Button type="button" onClick={() => this.props.previousPage(this.state.selectedTime, 'time')}>Back</Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log
    const { hours } = state.workingHours;
    const { contacts } = state.contactsInfo;
    const { bookings } = state.bookingInfo;
    const {services} = state.servicesInfo;
    let locationId = contacts[0].id;
    let filteredHours = hours.filter(h => h.locationId === locationId);
    return {
        hours: filteredHours,
        bookings,
        services,
    };
}

const connectedWizardFormThirdPage = connect(mapStateToProps)(WizardFormThirdPage);

export { connectedWizardFormThirdPage as WizardFormThirdPage };