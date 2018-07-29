import { userConstants } from '../_constants/user.constants';
import { userService } from '../_services/user.service';
import { alertActions } from './alert.actions';

import { history } from '../_helpers/history';

export const userActions = {
    login,
    logout,
    register
};

function login(email, password) {
    return dispatch => {
        dispatch(request(email));

        userService.login(email, password)
            .then(tokenInfo => {
                    history.push('/');
                    dispatch(success(tokenInfo));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(email) { return { type: userConstants.LOGIN_REQUEST, email } }
    function success(tokenInfo) { return { type: userConstants.LOGIN_SUCCESS, tokenInfo } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(id) {
    userService.logout(id);
    localStorage.removeItem('user');
    history.push('/login');
    return {
        type: userConstants.LOGOUT
    };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(registration => {
                    dispatch(success(registration));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(registration) { return { type: userConstants.REGISTER_SUCCESS, registration } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}