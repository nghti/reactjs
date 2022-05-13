import * as types from '@/store/modules/auth/constants';
import { hasToken } from '@/utils/helpers';

let isAuthenticated = hasToken();
console.log('isAuthenticated', isAuthenticated);
const initialState = {
  isAuthenticated: isAuthenticated,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case types.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
