import React, { Component } from 'react';
import Heading from '../../UI/Heading/Heading';
import SelectService from '../../Booking/SelectService/SelectService';
import { connect } from 'react-redux';
import {alertActions} from '../../../_actions/alert.actions'

class BookingPage extends Component {

    render() {
        console.log(this.props.authentication.loggedIn);
        if (!this.props.authentication.loggedIn) {
            this.props.history.replace('/login');
            const { dispatch } = this.props;
            dispatch(alertActions.unauthorized('Please login to book online.'));
        }
        return (
            <div className="container">
                <Heading>Book Online</Heading>
                <SelectService/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedBookingPage = connect(mapStateToProps)(BookingPage);

export { connectedBookingPage as BookingPage };




