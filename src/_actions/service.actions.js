import { serviceConstants } from '../_constants/service.constants';
import { servicesService } from '../_services/services.service';


export const serviceActions = {
    getAllServices,
};

function getAllServices() {
    return dispatch => {
        dispatch(request());

        servicesService.getAllServices()
            .then(services => {
                    dispatch(success(services));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: serviceConstants.GET_ALL_REQUEST } }
    function success(services) { return { type: serviceConstants.GET_ALL_SUCCESS, services } }
    function failure(error) { return { type: serviceConstants.GET_ALL_FAILURE, error } }
}
