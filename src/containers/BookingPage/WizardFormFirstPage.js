
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/UI/Header/Header';
import { ListGroup } from 'reactstrap';
import SelectableListItem from '../../components/UI/SelectableListItem/SelectableListItem';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class WizardFormFirstPage extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            selectedServices: props.data ? props.data : ((props.services && props.services.length > 0) ? [props.services[0].id] : []),
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

    componentDidUpdate() {
        if ((!this.state.selectedServices || this.state.selectedServices.length === 0)
            && this.props.services
            && this.props.services.length > 0) {
            this.setState({
                selectedServices: [this.props.services[0].id],
            });
        }
    }

    render() {
        const services = this.props.services;
        debugger;
        return (
            <div className="Form">
                <Header>Select services</Header>
                {(this.props.fetching && services.length === 0) || this.state.selectedServices.length === 0 ? <Spinner /> :
                <form className="Wrapper" onSubmit={(e) => this.onSubmit(e)}>
                    <ListGroup>
                        {services.map(service =>
                            <SelectableListItem itemId={service.id}
                                      selected={this.state.selectedServices.includes(service.id)}
                                      onClick={this.toggleService}
                                      key={service.id}>
                                {service.name} ({service.time} min)
                            </SelectableListItem>)}
                    </ListGroup>
                    <Button type="submit">Next</Button>
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