import { teamConstants } from '../_constants/team.constants';

const initialState = { 
  fetching: false, 
  teamMembers:[],
  error: null
};

export function team(state = initialState, action) {
  switch (action.type) {
    case teamConstants.FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case teamConstants.FETCH_SUCCESS:
      return {
        teamMembers: action.teamMembers,
        fetching: false,
      };
    case teamConstants.FETCH_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}