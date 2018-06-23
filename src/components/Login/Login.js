import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import './Login.css';
import Button from '../../components/UI/Button/Button';
import Header from '../../components/UI/Header/Header';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    render () {
        return (
            <div className="Login">
                <Header>Login form</Header>
                <form>
                    <Input  label="Email:"/>
                    <Input label="Password:"/>
                    <Button buttonType="Success">Login</Button>
                    <p className="Text">Don't have an account? Click here to register.</p>
                </form>
            </div>
        )
    }
}

export default Login;