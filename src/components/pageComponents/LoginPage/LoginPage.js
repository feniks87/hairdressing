import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import './LoginPage.css';
import Button from '../../../components/UI/Button/Button';
import Heading from '../../UI/Heading/Heading';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    render () {
        return (
            <div className="container ">
                <Heading>Login form</Heading>
                <form className="Login">
                    <Input  label="Email:" placeholder="Enter email"/>
                    <Input label="Password:" placeholder="Enter password"/>
                    <Button>Login</Button>
                    <p className="Text">Don't have an account? Click here to <span className="Text-link"><Link to="/registration">Register</Link></span>.</p>
                </form>
            </div>
        )
    }
}

export default LoginPage;