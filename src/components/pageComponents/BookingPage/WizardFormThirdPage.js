
import React, { Component } from 'react';

import { connect } from 'react-redux';
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
        this.generateTimeRange = this.generateTimeRange.bind(this);
        this.getServicesDuration = this.getServicesDuration.bind(this);
        this.calculateDays = this.calculateDays.bind(this);
        this.calculateDay = this.calculateDay.bind(this);

        const today = moment().hours(0).minutes(0).seconds(0).milliseconds(0);

        const lastDay = today.clone().add(1, 'months');

        const step = 30;

        const duration = this.getServicesDuration(props.servicesIds);

        const daysInfo = this.calculateDays(today, lastDay, step, duration);

        const excludeDays = daysInfo.filter(d => d.isFullyBookedOrPast === true).map(d => d.date);

        let selectedTime = props.time;

        if (!selectedTime) {
            let freeDate = daysInfo.find(d => d.isFullyBookedOrPast === false);
            selectedTime = freeDate ? freeDate.availableTime[0] : null;
        }

        let currentDayInfo = daysInfo.find(d => d.date.isSame(selectedTime, 'day'));

        if (selectedTime && !currentDayInfo.availableTime.some(t => t.isSame(selectedTime))) {
            selectedTime = currentDayInfo.availableTime[0];
        }

        let actualBookings = props.bookings.filter(b => b.stylistId === props.stylist);

        this.state = {
            bookings: actualBookings,
            stylist: props.stylist,
            selectedTime: selectedTime,
            step: step,
            daysInfo: daysInfo,
            excludeDays: excludeDays,
            firstDay: today,
            lastDay: lastDay,
            excludeTime: currentDayInfo ? currentDayInfo.excludeTime : [],
            startTime: currentDayInfo ? currentDayInfo.startTime : null,
            endTime: currentDayInfo ? currentDayInfo.endTime : null,
            serviceDuration: duration,
            allBusy: !selectedTime,
        };
    }

    calculateDays(startDate, endDate, step, serviceDuration) {

        let testDate = startDate.clone().hours(0).minutes(0).seconds(0).milliseconds(0);
        const lastDate = endDate.clone().hours(0).minutes(0).seconds(0).milliseconds(0);
        let daysInfo = [];

        while (!testDate.isAfter(lastDate)) {
            daysInfo.push(this.calculateDay(testDate, step, serviceDuration));
            testDate.add(1, 'days');
        }

        return daysInfo;
    }

    calculateDay(testDate, step, serviceDuration) {
        const now = moment();
        // find all bookings for selected stylist and this date
        const currentBookings = this.props.bookings.filter(b => b.stylistId === this.props.stylist
            && moment(b.time).isSame(testDate, 'day'));

        // detects a week day for this date
        const weekDay = testDate.format('dddd').toUpperCase();
        // find schedule (working hours) for this week day
        const hoursInfo = this.props.hours.find(h => h.day.toUpperCase() === weekDay);

        // start time for this day of the week from schedule
        const startTime = testDate.clone().hours(hoursInfo.startHour).minutes(hoursInfo.startMinutes);

        // end of working hours for this day of the week from schedule
        const endTime = testDate.clone().hours(hoursInfo.finishHour).minutes(hoursInfo.finishMinutes);

        // this date is today and it is already after working hours
        if (testDate.isSame(now, 'day') && now.isAfter(endTime)) {
            return {
                date: testDate.clone(),
                bookings: currentBookings,
                startTime: startTime.clone(),
                endTime: endTime.clone().subtract(step, 'minutes'),
                excludeTime: [],
                isFullyBookedOrPast: true,
                availableTime: [],
                periods: [],
            };
        }

        let excludeTime = [];

        // calculates times which need to be excluded according to existing bookings
        currentBookings.forEach(b => {
            // calculate the duration of all services for this booking
            const duration = this.getServicesDuration(b.services);
            const bookedTime = moment(b.time);
            const endBookingTime = bookedTime.clone().add(duration, 'minutes');
            const exclude = this.generateTimeRange(bookedTime, step, endBookingTime);
            excludeTime = [...excludeTime, ...exclude];
        });

        // excludes time intervals from open time to current time if selected day is today
        if (testDate.isSame(now, 'day') && now.isAfter(startTime)) {
            let exclude = this.generateTimeRange(startTime, step, now);
            excludeTime = [...excludeTime, ...exclude];
        }
        excludeTime.sort();

        const allTimes = this.generateTimeRange(startTime, step, endTime);

        let availableTime = allTimes.filter(x => !excludeTime.some(e => e.isSame(x)));
        availableTime.sort();

        let periods = [];

        // defines duration for all available intervals
        availableTime.forEach(t => {

            const firstBusyTime = excludeTime.length === 0 || !excludeTime.some(e => e.isAfter(t))
                ? endTime
                : excludeTime.find(et => et.isAfter(t));

            const duration = moment.duration(firstBusyTime.diff(t)).asMinutes();
            periods.push({
                time: t.clone(),
                duration: duration
            });
        });

        // excludes periods with less intervals than selected services duration
        periods.filter(p => p.duration < serviceDuration).forEach(p => excludeTime.push(p.time));

        excludeTime.sort();

        // defines times available for selected services duration
        availableTime = periods.filter(p => p.duration >= serviceDuration).map(p => p.time);
        availableTime.sort();

        return {
            date: testDate.clone(),
            bookings: currentBookings,
            startTime: startTime.clone(),
            endTime: endTime.clone().subtract(step, 'minutes'),
            excludeTime: excludeTime,
            isFullyBookedOrPast: availableTime.length === 0,
            availableTime: availableTime,
            periods: periods,
        };
    }

    generateTimeRange(startTime, step, endTime) {
        // if date is not set or if start date equals to end date - return just empty array
        if (startTime == null || step == null || endTime == null
            || (startTime.get('hour') === endTime.get('hour') && startTime.get('minute') === endTime.get('minute'))) {
            return [];
        }

        let result = [];
        let currentTime = startTime.clone();

        while (!currentTime.isSameOrAfter(endTime)) {
            result.push(currentTime.clone());
            currentTime = currentTime.add(step, 'minutes');
        }

        return result;
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.selectedTime);
    }

    handleChange(date) {
        let currentDate = date.clone();

        let currentDayInfo = this.state.daysInfo.find(d => d.date.isSame(currentDate, 'day'));

        if (!currentDayInfo.availableTime.some(d => d.isSame(currentDate))) {
            currentDate = currentDayInfo.availableTime[0];
        }

        this.setState({
            selectedTime: currentDate,
            excludeTime: currentDayInfo.excludeTime,
            startTime: currentDayInfo.startTime,
            endTime: currentDayInfo.endTime,

        });
    }

    // Calculates duration of all listed services by id
    getServicesDuration(servicesIds) {
        const reducer = (accumulator, serviceId) => {
            let service = this.props.services.find((service) => service.id === serviceId);
            return accumulator + service.time;
        };

        return servicesIds.reduce(reducer, 0);
    }


    render() {
        const hours = this.props.hours;
        if (!hours || hours.length === 0) { return null; }

        return (
            <div className="Form">
                <Heading>Choose date and time</Heading>
                { this.state.allBusy
                    ? <p>Sorry, all days are busy. You have chosen {this.state.serviceDuration}min of services in total.
                        Try to reduce the amount of services or visit us tomorrow. </p>
                    :
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
                                         minDate={this.state.firstDay}
                                         maxDate={this.state.lastDay}
                                         minTime={this.state.startTime}
                                         maxTime={this.state.endTime}
                                         excludeTimes={this.state.excludeTime}
                                         excludeDates={this.state.excludeDays}
                                         dateFormat="LLL"
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
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
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