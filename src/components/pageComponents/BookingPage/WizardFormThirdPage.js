
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
        this.state = {
            selectedTime: moment().hours(9).minutes(30).seconds(0).milliseconds(0),
        };

        this.toggleTime = this.toggleTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      toggleTime(timeId) {
        if (this.state.selectedTime === timeId) {
            this.setState({selectedTime: null });
        }
        else {
            this.setState({selectedTime: timeId });
        }
    }

    onSubmit(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.selectedTime, 'time');
    }

    handleChange(date) {
        this.setState({selectedTime: date });
    }

    render() {
        const services = this.props.services;
        if (!services) { return null; }
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
                            showDisabledMonthNavigation
                            showTimeSelect
                            inline
                        />
                        <p>Selected date and time: {this.state.selectedTime.format('MMMM Do YYYY, h:mm a').toString()}</p>
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
    const { services, fetching } = state.servicesInfo;
    return {
        services: services,
        fetching: fetching,
    };
}

const connectedWizardFormThirdPage = connect(mapStateToProps)(WizardFormThirdPage);

export { connectedWizardFormThirdPage as WizardFormThirdPage };