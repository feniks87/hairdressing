import { contactConstants } from '../_constants/contact.constants';
import { contactService } from '../_services/contact.service';


export const contactActions = {
    getContacts,
};

function getContacts() {
    return dispatch => {
        dispatch(request());

        contactService.getContacts()
            .then(contacts => {
                    dispatch(success(contacts));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: contactConstants.FETCH_REQUEST } }
    function success(contacts) { return { type: contactConstants.FETCH_SUCCESS, contacts } }
    function failure(error) { return { type: contactConstants.FETCH_FAILURE, error } }
}
