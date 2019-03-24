import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import './LoginPage.css';
import Button from '../../components/UI/Button/Button';
import Header from '../../components/UI/Header/Header';
import { Link } from 'react-router-dom';
import {userActions} from '../../_actions/user.actions';

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
	    const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            let loginAction = userActions.login(email, password);
            dispatch(loginAction);
            this.setState({ submitted: true });
        }
    }

    render () {
        const { alert } = this.props;
        const { email, password } = this.state;
        return (
            <div className="container ">
                <Header>Login form</Header>
                <form  name="form" className="Login" onSubmit={this.handleSubmit}>
                    {alert.message &&
                    <div className={`text-center alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Input
                        placeholder="Enter email"
                        name="email" value={email}
                        onChange={this.handleChange}
                        type="text"/>
                    <Input
                        placeholder="Enter password"
                        name="password" value={password}
                        onChange={this.handleChange}
                        type="password"/>
                    <Button type="Submit">Login</Button>
                </form><p className="Text">Click here to <span className="Text-link"><Link to="/registration">Register</Link></span>.</p>
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