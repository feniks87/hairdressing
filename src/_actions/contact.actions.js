import { contactConstants } from '../_constants/contact.constants';
import axios from '../axios-instance';

export const contactActions = {
    getContacts,
};

function getContacts() {
    return dispatch => {
        dispatch(request());

        axios.get('/contacts.json')
            .then(contacts => {
                dispatch(success(contacts.data));
            })
            .catch(error => {
                dispatch(failure(error));
            })
    };

    function request() { return { type: contactConstants.FETCH_REQUEST } }
    function success(contacts) { return { type: contactConstants.FETCH_SUCCESS, contacts } }
    function failure(error) { return { type: contactConstants.FETCH_FAILURE, error } }
}
