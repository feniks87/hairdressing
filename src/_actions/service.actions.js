import { serviceConstants } from '../_constants/service.constants';
import axios from '../axios-instance';


export const serviceActions = {
    getAllServices,
};

function getAllServices() {
    return dispatch => {
        dispatch(request());

        axios.get('/services.json')
            .then(services => {
                dispatch(success(services.data));
            })
            .catch(error => {
                dispatch(failure(error));
            })
        };

    function request() { return { type: serviceConstants.GET_ALL_REQUEST } }
    function success(services) { return { type: serviceConstants.GET_ALL_SUCCESS, services } }
    function failure(error) { return { type: serviceConstants.GET_ALL_FAILURE, error } }
}
