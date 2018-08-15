import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ServicesPage.css';
import Heading from '../../components/UI/Heading/Heading';
import TableItem from '../../components/UI/TableItem/TableItem';
import { serviceActions } from '../../_actions/service.actions';


class ServicesPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(serviceActions.getAllServices());
    }

    render() {
        return (
            <div className="container  table-responsive">
                <Heading>Our Services</Heading>
                {this.props.fetching ? <h5 className='text-center'>Loading...</h5> :
                <div className="Services">
                    <table className="table table-striped">
                        <tbody>
                        {this.props.services.map(service =>
                            <TableItem serviceName={service.name} price={service.price} key={service.id}/>
                        )}
                        </tbody>
                    </table>
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { services, fetching } = state.servicesInfo;
    return {
        services,
        fetching,
    };
}

const connectedServicesPage = connect(mapStateToProps)(ServicesPage);

export { connectedServicesPage as ServicesPage };



