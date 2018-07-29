import { hoursConstants } from '../_constants/hours.constants';
import { contactService } from '../_services/contact.service';


export const hoursActions = {
    getWorkingHours,
};

function getWorkingHours(locationId) {
    return dispatch => {
        dispatch(request(locationId));

        contactService.getWorkingHours(locationId)
            .then(hours => {
                    dispatch(success(hours));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(locationId) { return { type: hoursConstants.FETCH_REQUEST, locationId } }
    function success(hours) { return { type: hoursConstants.FETCH_SUCCESS, hours } }
    function failure(error) { return { type: hoursConstants.FETCH_FAILURE, error } }
}
