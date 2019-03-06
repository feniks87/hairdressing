import { userConstants } from '../_constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, loggingIn: false, isAdmin: true } : { loggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.AUTH_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
      };
    case userConstants.AUTH_SUCCESS:
      return {
        ...state,
        ...action.tokenInfo,
        loggedIn: true,
        loggingIn: false,
        isAdmin: true
      };
    case userConstants.AUTH_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        isAdmin: true,
        loggingIn: false,
        loggedIn: false
      };
    default:
      return state
  }
}