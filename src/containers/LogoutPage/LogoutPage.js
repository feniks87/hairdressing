import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {userActions} from '../../_actions/user.actions';

class LogoutPage extends Component {
    componentDidMount () {
        this.props.onLogout(this.props.authentication.id);
    }

    render () {
        return <Redirect to='/login'/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: (id) => dispatch(userActions.logout(id))
    };
};

const mapStateToProps = state => {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedLogoutPage = connect(mapStateToProps,mapDispatchToProps)(LogoutPage);

export { connectedLogoutPage as LogoutPage };