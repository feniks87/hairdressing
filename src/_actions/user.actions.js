import { userConstants } from '../_constants/user.constants';
import { alertActions } from './alert.actions';
import axios from '../axios-instance';
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
        dispatch(request());
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCfBr35UM1khoKnAl0G3JgwxJLujhKh_s8';
        return axios.post(url, {email, password, returnSecureToken: true})
            .then(tokenInfo => {
                history.push('/');
                dispatch(success(tokenInfo.data));
                dispatch(userActions.getClient(tokenInfo.data.localId, tokenInfo.id));
                })
            .catch(error => {
                dispatch(failure(error.message));
                dispatch(alertActions.error(error.message));
                if (error.response.status === 400) {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error("Email or password is incorrect"));
                }
                else {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            });
    };

    function request() { return { type: userConstants.AUTH_REQUEST } }
    function success(tokenInfo) { return { type: userConstants.AUTH_SUCCESS, tokenInfo } }
    function failure(error) { return { type: userConstants.AUTH_FAILURE, error } }
}

function logout() {
    history.push('/login');
    return {
        type: userConstants.LOGOUT
    };
}

function register(user) {
    return dispatch => {
        dispatch(request());
        const authData = {
            email: user.email,
            password: user.password
        };
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCfBr35UM1khoKnAl0G3JgwxJLujhKh_s8';
        axios.post(url, authData)
            .then(registration => {
                dispatch(success(registration.data));
                const userInformation = {
                    name: user.name,
                    phone: user.phone,
                    userId: registration.data.localId
                }

                axios.post(`/users.json?auth=${registration.data.idToken}`, userInformation)
                .then((res) => {
                    dispatch(userDataSaved({...userInformation, id: res.data.name}));
                    history.push('/');
                })
                .catch(error => {
                    if (error.response.status === 400 && error.response.data.error.message === "EMAIL_EXISTS") {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error("The email address you have entered is already registered"));
                    }
                    else {
                        dispatch(failure(error.message));
                        dispatch(alertActions.error(error.message));
                    }
                });

                dispatch(alertActions.success('You have been registered successfully!'));
            })
            .catch(error => {
                if (error.response.status === 400 && error.response.data.error.message === "EMAIL_EXISTS") {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error("The email address you have entered is already registered"));
                }
                else {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            });
    };

    function request() { return { type: userConstants.AUTH_REQUEST } }
    function success(tokenInfo) { return { type: userConstants.AUTH_SUCCESS, tokenInfo } }
    function failure(error) { return { type: userConstants.AUTH_FAILURE, error } }

    function userDataSaved(clientInfo) { return { type: userConstants.FETCH_CLIENT_SUCCESS, clientInfo } }
}

function getClient(userId, token) {
    return dispatch => {
        dispatch(request(userId));
        const queryParams = `?orderBy="userId"&equalTo="${userId}"`
        axios.get('/users.json' + queryParams)
            .then(clientInfo => {
                const value = Object.values(clientInfo.data)[0];
                const key = Object.keys(clientInfo.data)[0];
                dispatch(success({...value, id: key}));
            })
            .catch(error => {
                dispatch(failure(error.message));
                dispatch(alertActions.error(error.message));
            });

    };

    function request(clientId) { return { type: userConstants.FETCH_CLIENT_REQUEST, clientId } }
    function success(clientInfo) { return { type: userConstants.FETCH_CLIENT_SUCCESS, clientInfo } }
    function failure(error) { return { type: userConstants.FETCH_CLIENT_FAILURE, error } }
}

function updateClient(client, token) {
    return dispatch => {
        dispatch(request());
        const clientInfo = {
            name: client.name,
            phone: client.phone
        }
        axios.patch(`/users/${client.id}.json`, clientInfo)
            .then(clientInfo => {
                dispatch(success(clientInfo.data));
                dispatch(alertActions.success('Details were successfully updated'));
            })
            .catch(error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
            });
        }

    function request() { return { type: userConstants.UPDATE_CLIENT_REQUEST } }
    function success(clientInfo) { return { type: userConstants.UPDATE_CLIENT_SUCCESS, clientInfo } }
    function failure(error) { return { type: userConstants.UPDATE_CLIENT_FAILURE, error } }
}