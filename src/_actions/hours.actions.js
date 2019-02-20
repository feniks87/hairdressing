import { hoursConstants } from '../_constants/hours.constants';
import axios from '../axios-instance';


export const hoursActions = {
    getAllWorkingHours,
};


function getAllWorkingHours() {
    return dispatch => {
        dispatch(request());

        axios.get('/hours.json')
            .then(hours => {
                    dispatch(success(hours.data));
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };

    function request(locationId) { return { type: hoursConstants.FETCH_REQUEST, locationId } }
    function success(hours) { return { type: hoursConstants.FETCH_SUCCESS, hours } }
    function failure(error) { return { type: hoursConstants.FETCH_FAILURE, error } }
}
