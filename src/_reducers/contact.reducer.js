import { contactConstants } from '../_constants/contact.constants';

const initialState = {
    fetching: false,
    contacts:[],
    error: null
};

export function contactsInfo(state = initialState, action) {
    switch (action.type) {
        case contactConstants.FETCH_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case contactConstants.FETCH_SUCCESS:
            return {
                contacts: action.contacts,
                fetching: false,
                error: null,
            };
        case contactConstants.FETCH_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}