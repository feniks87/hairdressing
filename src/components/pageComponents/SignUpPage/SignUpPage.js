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
            user: {
                name: '',
                phone: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.name && user.email && user.phone && user.password) {
            fetch(`${BASE_URL}/clients`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.user.name,
                    phone: this.state.user.phone,
                    email: this.state.user.email,
                    password: this.state.user.password
                }),
            })
        }
    }

    render () {
        const { user, submitted } = this.state;
        return (
            <div className="container">
                <Heading>Sign Up Form</Heading>
                <form className="Registration" onSubmit={this.handleSubmit}>
                    <Input label="Name:" placeholder="Enter name" value={user.name}
                           onChange={this.handleChange}
                           showError={submitted && !user.name}
                           name="name"
                           errorMessage="Name is required"/>
                    <Input label="Contact phone:" placeholder="Enter phone number" value={user.phone}
                           onChange={this.handleChange}
                           showError={submitted && !user.phone}
                           name="phone"
                           errorMessage="Name is required"/>
                    <Input label="Email:" placeholder="Enter email" value={user.email}
                           onChange={this.handleChange}
                           showError={submitted && !user.email}
                           name="email"
                           errorMessage="Email is required"/>
                    <Input label="Password:" placeholder="Enter password" value={user.password}
                           onChange={this.handleChange}
                           showError={submitted && !user.password}
                           name="password"
                           errorMessage="Password is required"/>
                    <Input label="Confirm Password:" placeholder="Repeat password" value={user.confirmPassword}
                           onChange={this.handleChange}
                           showError={submitted && !user.confirmPassword}
                           name="confirmPassword"
                           errorMessage="Confirm password is required"/>
                    <Button type="Submit">Register</Button></form>
            </div>
        )
    }
}

export default SignUpPage;