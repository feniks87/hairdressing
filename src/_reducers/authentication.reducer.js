import { userConstants } from '../_constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, loggingIn: false } : { loggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        email: action.email,
        loggedIn: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.tokenInfo,
        loggedIn: true,
        loggingIn: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}