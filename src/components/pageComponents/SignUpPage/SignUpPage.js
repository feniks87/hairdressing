import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../UI/Input/Input';
import './SignUpPage.css';
import Button from '../../UI/Button/Button';
import Heading from '../../UI/Heading/Heading';

import { userActions } from '../../../_actions/user.actions';


class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                phone: '',
                email: '',
                password: ''
            },
            submitted: false,
            confirmPassword: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleConfirmPasswordChange(event) {
        const { value } = event.target;
        this.setState({
            confirmPassword: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user, confirmPassword } = this.state;
        const { dispatch } = this.props;
        if (user.name && user.email && user.phone && user.password && user.password === confirmPassword) {
            dispatch(userActions.register(user));
        }
    }

    render () {
        const { user, submitted, confirmPassword } = this.state;
        return (
            <div className="container">
                <Heading>Sign Up Form</Heading>
                <form className="Registration" onSubmit={this.handleSubmit}>
                    <Input label="Name:" placeholder="Enter name" value={user.name}
                           onChange={this.handleChange}
                           showError={submitted && !user.name}
                           name="name"
                           errorMessage="Name is required"
                           type="text"/>
                    <Input label="Contact phone:" placeholder="Enter phone number" value={user.phone}
                           onChange={this.handleChange}
                           showError={submitted && !user.phone}
                           name="phone"
                           errorMessage="Name is required"
                           type="text"/>
                    <Input label="Email:" placeholder="Enter email" value={user.email}
                           onChange={this.handleChange}
                           showError={submitted && !user.email}
                           name="email"
                           errorMessage="Email is required"
                           type="text"/>
                    <Input label="Password:" placeholder="Enter password" value={user.password}
                           onChange={this.handleChange}
                           showError={submitted && !user.password}
                           name="password"
                           errorMessage="Password is required"
                           type="password"/>
                    <Input label="Confirm Password:" placeholder="Repeat password" value={confirmPassword}
                           onChange={this.handleConfirmPasswordChange}
                           showError={submitted && !confirmPassword && confirmPassword === user.password}
                           name="confirmPassword"
                           errorMessage="Confirm password is required"
                           type="password"/>
                    <Button type="Submit">Register</Button></form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedSignUpPage = connect(mapStateToProps)(SignUpPage);

export { connectedSignUpPage as SignUpPage };