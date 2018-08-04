import { hoursConstants } from '../_constants/hours.constants';

const initialState = {
    fetching: false,
    hours: [],
    error: null
};

export function workingHours(state = initialState, action) {
    switch (action.type) {
        case hoursConstants.FETCH_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case hoursConstants.FETCH_SUCCESS:
            return {
                hours: action.hours,
                fetching: false,
            };
        case hoursConstants.FETCH_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}