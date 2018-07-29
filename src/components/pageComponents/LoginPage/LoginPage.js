import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../UI/Input/Input';
import './LoginPage.css';
import Button from '../../../components/UI/Button/Button';
import Heading from '../../UI/Heading/Heading';
import { Link } from 'react-router-dom';

import {userActions} from '../../../_actions/user.actions';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    render () {
        const { alert } = this.props;
        const { email, password } = this.state;
        return (
            <div className="container ">
                <Heading>Login form</Heading>
                <form  name="form" className="Login" onSubmit={this.handleSubmit}>
                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Input  label="Email:"
                            placeholder="Enter email"
                            name="email" value={email}
                            onChange={this.handleChange}
                            type="text"/>
                    <Input label="Password:"
                           placeholder="Enter password"
                           name="password" value={password}
                           onChange={this.handleChange}
                           type="password"/>
                    <Button type="Submit">Login</Button>
                    <p className="Text">Don't have an account? Click here to <span className="Text-link"><Link to="/registration">Register</Link></span>.</p>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    const { loggingIn } = authentication;
    return {
        loggingIn,
        alert
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);

export { connectedLoginPage as LoginPage };