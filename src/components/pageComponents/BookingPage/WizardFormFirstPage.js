
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Heading from '../../UI/Heading/Heading';

import { ListGroup } from 'reactstrap';

import ListItem from '../../UI/ListItem/ListItem';

import Button from '../../UI/Button/Button';

class WizardFormFirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedServices: props.data ? props.data : [props.services[0].id],
        };

        this.toggleService = this.toggleService.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    toggleService(serviceId) {
        if (this.state.selectedServices.includes(serviceId)) {
            if (this.state.selectedServices.length > 1) {
                this.setState((prevState, props) => ({
                    selectedServices: prevState.selectedServices.filter(id => id !== serviceId),
                }));
            }
        }
        else {
            this.setState((prevState, props) => ({
                selectedServices: [...prevState.selectedServices, serviceId],
            }));
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.selectedServices, 'services')
    }

    render() {
        const services = this.props.services;
        if (!services) { return null; }
        return (
            <div className="Form">
                <Heading>Choose services</Heading>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <ListGroup>
                        {services.map(service =>
                            <ListItem itemId={service.id}
                                      selected={this.state.selectedServices.includes(service.id)}
                                      onClick={this.toggleService}
                                      key={service.id}
                            >
                                {service.name} ({service.time} min)
                            </ListItem>)}
                    </ListGroup>
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

const connectedWizardFormFirstPage = connect(mapStateToProps)(WizardFormFirstPage);

export { connectedWizardFormFirstPage as WizardFormFirstPage };