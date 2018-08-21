import { serviceConstants } from '../_constants/service.constants';

const initialState = { 
  fetching: false, 
  services:[],
  error: null
};

export function servicesInfo(state = initialState, action) {
  switch (action.type) {
    case serviceConstants.GET_ALL_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case serviceConstants.GET_ALL_SUCCESS:
      return {
        services: action.services,
        fetching: false,
      };
    case serviceConstants.GET_ALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}