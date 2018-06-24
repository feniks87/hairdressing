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
            <div className="container Registration">
                <Heading>Sign Up Form</Heading>
                <form>
                    <Input  label="First name:"/>
                    <Input  label="Last name:"/>
                    <Input  label="Contact phone:"/>
                    <Input  label="Email:"/>
                    <Input label="Password:"/>
                    <Input label="Confirm Password:"/>
                    <Button>Register</Button></form>
            </div>
        )
    }

}

export default Registration;