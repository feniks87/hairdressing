import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ServicesPage.css';
import Heading from '../../UI/Heading/Heading';
import TableItem from '../../UI/TableItem/TableItem';
import { serviceActions } from '../../../_actions/service.actions';


class ServicesPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(serviceActions.getAllServices());
    }

    render() {
        const services = this.props.services;
        if (!services) { return null; }

        return (
            <div className="container  table-responsive">
                <Heading>Our Services</Heading>
                <div className="Services">
                    <table className="table table-striped">
                        <tbody>
                        {services.map(service =>
                            <TableItem serviceName={service.name} price={service.price} key={service.id}/>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { services, fetching } = state.servicesInfo;
    return {
        services: services,
        fetching: fetching,
    };
}

const connectedServicesPage = connect(mapStateToProps)(ServicesPage);

export { connectedServicesPage as ServicesPage };



