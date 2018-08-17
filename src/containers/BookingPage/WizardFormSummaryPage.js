
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/UI/Heading/Heading';
import Button from '../../components/UI/Button/Button';
import ListItem from '../../components/UI/ListItem/ListItem';
import 'react-datepicker/dist/react-datepicker.css';

class WizardFormSummaryPage extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
      e.preventDefault();
      this.props.onSubmit();
    }

    render() {
        const stylist = this.props.teamMembers.find(m => m.id === this.props.stylist);
        const selectedServices = this.props.services.filter(service => this.props.servicesIds.includes(service.id));
        const totalPrice = selectedServices.reduce((acc, service) => acc + service.price, 0);
        const totalDuration = selectedServices.reduce((acc, service) => acc + service.time, 0);
        const hours = Math.floor(Math.floor(totalDuration/60));
        const minutes = totalDuration % 60;
        return (
            <div className="Form">
                <Heading>Confirm booking</Heading>
                
                <form className="Wrap" name="form" onSubmit={this.onSubmit}>
                    <p>Stylist name: {stylist.name}</p>
                    <p>Services:</p>
                    <div>
                        <ul>
                            {selectedServices.map(service =>
                                <ListItem value={`${service.name} (${service.price}$)`} key={service.id}/>
                            )}
                        </ul>
                    </div>

                    <p>You will spend approximately: {hours === 0 ? "" : hours + " hours"}{minutes === 0 ? "" : " " + minutes + "min"}</p>
                    <p>Total price: {totalPrice}$</p>
                    <p>Selected date and time: {this.props.time.format('MMMM Do dddd, h:mm a').toString()}</p>
                    <div>
                        <Button type="submit">Book</Button>
                        <Button type="button" onClick={() => this.props.previousPage(null, null)}>Back</Button>
                    </div>
                </form>
            </div>
    );
  }
}

function mapStateToProps(state) {
    const { bookings } = state.bookingInfo;
    const {services} = state.servicesInfo;
    const { teamMembers } = state.team;
    return {
        bookings,
        services,
        teamMembers,
    };
}

const connectedWizardFormSummaryPage = connect(mapStateToProps)(WizardFormSummaryPage);

export { connectedWizardFormSummaryPage as WizardFormSummaryPage };