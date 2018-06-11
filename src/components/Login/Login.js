import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Login.css';
import Button from '../../components/UI/Button/Button';

class Login extends Component{
    state = {
        email: '',
        password: ''
    }

    render () {
        return (
            <div>
                <h4 className={classes.Name}>Login form</h4>
                <form>
                    <Input  label="Email:"/>
                    <Input label="Password:"/>
                    <Button buttonType="Success">Login</Button>
                </form>
            </div>
        )
    }

}

export default Login;