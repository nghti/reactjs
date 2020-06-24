import * as types from '@/store/modules/auth/constants';
import makeActionCreator from '@/store/makeActionCreator';

export const loginRequest = (user) => makeActionCreator(types.AUTH_LOGIN_REQUEST, user);
export const loginSuccess = (token) => makeActionCreator(types.AUTH_LOGIN_SUCCESS, token);
export const loginFailure = (error) => makeActionCreator(types.AUTH_LOGIN_FAILURE, error);
export const logoutRequest = () => makeActionCreator(types.AUTH_LOGOUT_REQUEST);
export const logoutSuccess = () => makeActionCreator(types.AUTH_LOGOUT_SUCCESS);
export const logoutFailure = (error) => makeActionCreator(types.AUTH_LOGOUT_FAILURE, error);
