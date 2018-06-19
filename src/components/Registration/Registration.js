import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import './Registration.css';
import Button from '../../components/UI/Button/Button';

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
            <div className="Registration">
                <h4 className="Name">Sign up form</h4>
                <form>
                    <Input  label="First name:"/>
                    <Input  label="Last name:"/>
                    <Input  label="Contact phone:"/>
                    <Input  label="Email:"/>
                    <Input label="Password:"/>
                    <Input label="Confirm Password:"/>
                    <Button buttonType="Success">Register</Button></form>
            </div>
        )
    }

}

export default Registration;