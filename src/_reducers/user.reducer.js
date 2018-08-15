import { userConstants } from '../_constants/user.constants';


export function userInfo(state={}, action) {
  switch (action.type) {
    case userConstants.FETCH_CLIENT_REQUEST:
      return {
        ...state,
        fetching: true,
        id: action.clientId,
      };
    case userConstants.FETCH_CLIENT_SUCCESS:
      return {
        ...state,
        ...action.clientInfo,
        fetching: false,
      };
    case userConstants.FETCH_CLIENT_FAILURE:
      return {
        error: action.error
      };

      case userConstants.UPDATE_CLIENT_REQUEST:
      return {
        ...state,
        fetching: true,
        id: action.clientId,
      };
    case userConstants.UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
        ...action.clientInfo,
        fetching: false,
      };
    case userConstants.UPDATE_CLIENT_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}