import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookingPage.css';

import {serviceActions} from '../../../_actions/service.actions';
import {teamActions} from '../../../_actions/team.actions';
import {hoursActions} from '../../../_actions/hours.actions';

import {alertActions} from '../../../_actions/alert.actions';
import {bookingActions} from '../../../_actions/booking.actions';

import { WizardFormFirstPage } from '../../pageComponents/BookingPage/WizardFormFirstPage'
import { WizardFormSecondPage } from '../../pageComponents/BookingPage/WizardFormSecondPage'
import { WizardFormThirdPage } from '../../pageComponents/BookingPage/WizardFormThirdPage'

class BookingPage extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
        };
    }


    onSubmit(time) {
        console.log('on submit');
        console.log(this.state);
        const { dispatch } = this.props;
        dispatch(bookingActions.addBooking({
            time: time,
            clientId: this.props.authentication.userId,
            stylistId: this.state.stylist,
            services: this.state.services,
            comment: ''
        }));
    }

    nextPage(data, name) {
        this.setState((prevState, props) => ({
            ...prevState,
            page: this.state.page + 1,
            [name]: data,
        }));
        console.log(this.state);
    }

    previousPage(data, name) {
        this.setState((prevState, props) => ({
            ...prevState,
            page: this.state.page - 1,
            [name]: data,
        }));
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(serviceActions.getAllServices());
        dispatch(teamActions.getTeam());
        dispatch(hoursActions.getAllWorkingHours());
        dispatch(bookingActions.getBookings());
    }

    render() {

        if (!this.props.authentication.loggedIn) {
            this.props.history.replace('/login');
            const { dispatch } = this.props;
            dispatch(alertActions.unauthorized('Please log in to book online.'));
        }
        const { page } = this.state;

        if (!this.props.services
            || this.props.services.length === 0
            || !this.props.teamMembers
            || this.props.teamMembers.length === 0
            || !this.props.hours
            || this.props.hours.length === 0) {
            return null;
        }

        return (
            <div className="container">
                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} data={this.state.services}/>}
                {page === 2 &&
                <WizardFormSecondPage
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                    data={this.state.stylist}
                />}
                {page === 3 &&
                <WizardFormThirdPage
                    previousPage={this.previousPage}
                    onSubmit={this.onSubmit}
                />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { authentication, servicesInfo, team, workingHours } = state;
    const {teamMembers} = team;
    const {services} = servicesInfo;
    const {hours} = workingHours;
    return {
        authentication,
        services,
        teamMembers,
        hours,
    };
}

const connectedBookingPage = connect(mapStateToProps)(BookingPage);

export { connectedBookingPage as BookingPage };



