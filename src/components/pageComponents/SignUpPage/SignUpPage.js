import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import './SignUpPage.css';
import Button from '../../../components/UI/Button/Button';
import Heading from '../../UI/Heading/Heading';

const BASE_URL = process.env.REACT_APP_API_PATH;

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState (
            {name: event.target.value}
        );
    }

    handlePhoneChange(event) {
        this.setState (
            {phone: event.target.value}
        );
    }

    handleEmailChange(event) {
        this.setState (
            {email: event.target.value}
        );
    }

    handlePassChange(event) {
        this.setState (
            {password: event.target.value}
        );
    }

    handleConfirmPassChange(event) {
        this.setState (
            {confirmPassword: event.target.value}
        );
    }

    handleSubmit(event) {
        alert('You are registered successfully!');
        event.preventDefault();
        fetch(`${BASE_URL}/clients`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password
            }),
        })
    }

    render () {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="container">
                <Heading>Sign Up Form</Heading>
                <form className="Registration" onSubmit={this.handleSubmit}>
                    <Input label="Name:" placeholder="Enter name" value={this.state.name} onChange={this.handleNameChange} showError={submitted && !this.state.name}/>
                    <Input label="Contact phone:" placeholder="Enter phone number" value={this.state.phone} onChange={this.handlePhoneChange}/>
                    <Input label="Email:" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}/>
                    <Input label="Password:" placeholder="Enter password" value={this.state.password} onChange={this.handlePassChange}/>
                    <Input label="Confirm Password:" placeholder="Repeat password" value={this.state.confirmPassword} onChange={this.handleConfirmPassChange}/>
                    <Button type="Submit">Register</Button></form>
            </div>
        )
    }
}

export default SignUpPage;