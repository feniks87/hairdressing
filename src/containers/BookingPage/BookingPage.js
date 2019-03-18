import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookingPage.css';

import {serviceActions} from '../../_actions/service.actions';
import {teamActions} from '../../_actions/team.actions';
import {hoursActions} from '../../_actions/hours.actions';

import {alertActions} from '../../_actions/alert.actions';
import {bookingActions} from '../../_actions/booking.actions';
import {contactActions} from '../../_actions/contact.actions';

import { WizardFormFirstPage } from '../BookingPage/WizardFormFirstPage';
import { WizardFormSecondPage } from '../BookingPage/WizardFormSecondPage';
import { WizardFormThirdPage } from '../BookingPage/WizardFormThirdPage';
import { WizardFormSummaryPage } from '../BookingPage/WizardFormSummaryPage';

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

    onSubmit() {
        const { dispatch } = this.props;
        dispatch(bookingActions.addBooking({
          time: this.state.time,
          clientId: this.props.authentication.localId,
          stylistId: this.state.stylist,
          services: this.state.services,
        }));
    }

    nextPage(data, name) {

        this.setState((prevState, props) => ({
            ...prevState,
            page: this.state.page + 1,
            [name]: data,
        }));
    }

    previousPage(data, name) {
        if (data && name) {
          this.setState((prevState, props) => ({
            ...prevState,
            page: this.state.page - 1,
            [name]: data,
            }));
        }
        else {
          this.setState((prevState, props) => ({
            ...prevState,
            page: this.state.page - 1,
            }));
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(serviceActions.getAllServices());
        dispatch(teamActions.getTeam());
        dispatch(hoursActions.getAllWorkingHours());
        dispatch(bookingActions.getBookings(this.props.authentication.idToken));
        dispatch(contactActions.getContacts());
        this.setState({
          page: 1,
        });
    }

    render() {
      if (!this.props.authentication.loggedIn) {
        this.props.history.replace('/login');
        const { dispatch } = this.props;
        dispatch(alertActions.unauthorized('Please login to book online'));
      }
      const { page } = this.state;

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
              onSubmit={this.nextPage}
              time={this.state.time}
              stylist={this.state.stylist}
              servicesIds={this.state.services}
          />}
          {page === 4 &&
            <WizardFormSummaryPage
              previousPage={this.previousPage}
              onSubmit={this.onSubmit}
              time={this.state.time}
              stylist={this.state.stylist}
              servicesIds={this.state.services}
          />}
        </div>
      );
    }
}

const mapStateToProps = state => {
    const { authentication, servicesInfo, team, workingHours, contactsInfo } = state;
    return {
        authentication,
        servicesInfo,
        team,
        workingHours,
        contactsInfo
    };
}

const connectedBookingPage = connect(mapStateToProps)(BookingPage);

export { connectedBookingPage as BookingPage };