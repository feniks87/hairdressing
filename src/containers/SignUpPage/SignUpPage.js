import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import './SignUpPage.css';
import Button from '../../components/UI/Button/Button';
import Header from '../../components/UI/Header/Header';
import { userActions } from '../../_actions/user.actions';
import { alertActions } from '../../_actions/alert.actions';

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

        if (user.name === ""
            || user.email === ""
            || user.phone === ""
            || user.password === ""
            || confirmPassword === "") {
            dispatch(alertActions.error("Please fill all the required fields"));
        } else if (user.password !== confirmPassword) {
            dispatch(alertActions.error("Password and confirm password do not match"));
        } else if (user.password.length < 6) {
            dispatch(alertActions.error("Password should contain at least 6 characters"));
        } else if (user.name && user.email && user.phone && user.password && user.password === confirmPassword) {
            dispatch(userActions.register(user));
        }
    }

    render () {
        const { alert } = this.props;
        const { user, submitted, confirmPassword } = this.state;
        return (
            <div className="container">
                <Header>Sign Up Form</Header>
                <form className="Registration" onSubmit={this.handleSubmit}>
                {alert.message &&
                        <div className={`text-center alert ${alert.type}`}>{alert.message}</div>
                        }
                    <Input placeholder="Enter name" value={user.name}
                           onChange={this.handleChange}
                           showError={submitted && !user.name}
                           name="name"
                           errorMessage="Name is required"
                           type="text"/>
                    <Input placeholder="Enter phone number" value={user.phone}
                           onChange={this.handleChange}
                           showError={submitted && !user.phone}
                           name="phone"
                           errorMessage="Phone number is required"
                           type="text"/>
                    <Input placeholder="Enter email" value={user.email}
                           onChange={this.handleChange}
                           showError={submitted && !user.email}
                           name="email"
                           errorMessage="Email is required"
                           type="text"/>
                    <Input placeholder="Enter password" value={user.password}
                           onChange={this.handleChange}
                           showError={submitted && !user.password}
                           name="password"
                           errorMessage="Password is required"
                           type="password"/>
                    <Input placeholder="Repeat password" value={confirmPassword}
                           onChange={this.handleConfirmPasswordChange}
                           showError={submitted && !confirmPassword && confirmPassword === user.password}
                           name="confirmPassword"
                           errorMessage="Confirm password is required"
                           type="password"/>
                    <Button type="Submit">Register</Button>
                    </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        alert
    };
}

const connectedSignUpPage = connect(mapStateToProps)(SignUpPage);

export { connectedSignUpPage as SignUpPage };