import { userConstants } from '../_constants/user.constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registering: true,
        email: action.user.email
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.registration,
        'error': null,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        'error': state.error,
      };
    default:
      return state
  }
}