
import React, { Component } from 'react';

import { connect } from 'react-redux';

import Heading from '../../components/UI/Heading/Heading';

import { ListGroup } from 'reactstrap';

import SelectableListItem from '../../components/UI/SelectableListItem/SelectableListItem';

import Button from '../../components/UI/Button/Button';

class WizardFormFirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedServices: props.data ? [...props.data] : ((props.services && props.services.length > 0) ? [props.services[0].id] : null),
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.selectedServices && !this.props.fetching) {
            this.setState({
                selectedServices: this.props.services[0],
            });
        }
    }

    render() {
        const services = this.props.services;
        if (!services) { return null; }
        return (
            <div className="Form">
                <Heading>Choose services</Heading>
                {this.props.fetching ? <h5 className='text-center'>Loading...</h5> :
                <form className="Wrap" onSubmit={(e) => this.onSubmit(e)}>
                    <ListGroup>
                        {services.map(service =>
                            <SelectableListItem itemId={service.id}
                                      selected={this.state.selectedServices.includes(service.id)}
                                      onClick={this.toggleService}
                                      key={service.id}
                            >
                                {service.name} ({service.time} min)
                            </SelectableListItem>)}
                    </ListGroup>
                    <div>
                        <Button type="submit">Next</Button>
                    </div>
                </form>}
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