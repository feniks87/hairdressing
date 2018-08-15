import { userConstants } from '../_constants/user.constants';
import { userService } from '../_services/user.service';
import { alertActions } from './alert.actions';

import { history } from '../_helpers/history';

export const userActions = {
    login,
    logout,
    register, 
    getClient,
    updateClient,
};

function login(email, password) {
    return dispatch => {
        dispatch(request(email));

        userService.login(email, password)
            .then(tokenInfo => {
                    history.push('/');
                    dispatch(success(tokenInfo));
                    dispatch(userActions.getClient(tokenInfo.userId, tokenInfo.id));
                },
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));

                    if (error.response.status === 401) {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error("Email or Password is incorrect"));
                    }
                    else {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error(error.message));
                    }
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
                    dispatch(alertActions.success('You have been registered successfully!'));
                },
                error => {
                    if (error.response.status === 422) {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error("The email address you have entered is already registered"));
                    }
                    else {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error(error.message));
                    }
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(registration) { return { type: userConstants.REGISTER_SUCCESS, registration } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getClient(clientId, token) {
    return dispatch => {
        dispatch(request(clientId));

        userService.getClient(clientId, token)
            .then(clientInfo => {
                    dispatch(success(clientInfo));
                },
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(clientId) { return { type: userConstants.FETCH_CLIENT_REQUEST, clientId } }
    function success(clientInfo) { return { type: userConstants.FETCH_CLIENT_SUCCESS, clientInfo } }
    function failure(error) { return { type: userConstants.FETCH_CLIENT_FAILURE, error } }
}

function updateClient(client, token) {
    return dispatch => {
        dispatch(request(client.id));

        userService.updateClient(client, token)
            .then(clientInfo => {
                    dispatch(success(clientInfo));
                    dispatch(alertActions.success('Details were successfully updated'));
                },
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(clientId) { return { type: userConstants.UPDATE_CLIENT_REQUEST, clientId } }
    function success(clientInfo) { return { type: userConstants.UPDATE_CLIENT_SUCCESS, clientInfo } }
    function failure(error) { return { type: userConstants.UPDATE_CLIENT_FAILURE, error } }
}