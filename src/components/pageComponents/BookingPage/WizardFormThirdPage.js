
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Heading from '../../UI/Heading/Heading';

import Button from '../../UI/Button/Button';

class WizardFormThirdPage extends Component {

    constructor(props) {
        super(props);       
        this.state = {
          selectedServices: [],
        };

        this.toggleService = this.toggleService.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    toggleService(serviceId) {
        console.log('click');
        if (this.state.selectedServices.includes(serviceId)) {
            this.setState((prevState, props) => ({
                selectedServices: prevState.selectedServices.filter(id => id !== serviceId),
              }));
        }
        else {
            this.setState((prevState, props) => ({
                selectedServices: [...prevState.selectedServices, serviceId],
              }));
        }
    }

    onSubmit(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.selectedServices, 'stylists')
  }

    render() {
        const services = this.props.services;
        if (!services) { return null; }
        return (
            <div className="container ">
                <Heading>Choose time</Heading>
                <form onSubmit={(e) => this.onSubmit(e)}>
                   
                    <div>
                        <Button type="submit">Next</Button>
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