import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import './Login.css';
import Button from '../../components/UI/Button/Button';
import Heading from '../UI/Heading/Heading';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    render () {
        return (
            <div className="container ">
                <Heading>Login form</Heading>
                <form className="Login">
                    <Input  label="Email:"/>
                    <Input label="Password:"/>
                    <Button>Login</Button>
                    <p className="Text">Don't have an account? Click here to <span className="Text-link"><Link to="/registration">Register</Link></span>.</p>
                </form>
            </div>
        )
    }
}

export default Login;