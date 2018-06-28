import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import './Registration.css';
import Button from '../../components/UI/Button/Button';
import Heading from '../UI/Heading/Heading';

class Registration extends Component{
    state = {
        firstName: '',
        lastName: '',
        contactPhone: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    render () {
        return (
            <div className="container">
                <Heading>Sign Up Form</Heading>
                <form className="Registration">
                    <Input  label="First name:" placeholder="Enter first name"/>
                    <Input  label="Last name:" placeholder="Enter last name"/>
                    <Input  label="Contact phone:" placeholder="Enter phone number"/>
                    <Input  label="Email:" placeholder="Enter email"/>
                    <Input label="Password:" placeholder="Enter password"/>
                    <Input label="Confirm Password:" placeholder="Repeat password"/>
                    <Button>Register</Button></form>
            </div>
        )
    }

}

export default Registration;