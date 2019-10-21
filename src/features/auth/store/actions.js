export const types = {
  AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAILURE: 'AUTH_LOGIN_FAILURE',
  AUTH_LOGOUT_REQUEST: 'AUTH_LOGOUT_REQUEST',
  AUTH_LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_FAILURE: 'AUTH_LOGOUT_FAILURE',
}

export function loginRequest(user) {
  return {
    type: types.AUTH_LOGIN_REQUEST,
    payload: {user}
  }
}

export function loginSuccess(token) {
  return {
    type: types.AUTH_LOGIN_SUCCESS,
    payload: token
  }
}

export function loginFailure(error) {
  return {
    type: types.AUTH_LOGIN_FAILURE,
    payload: error
  }
}

export function logoutRequest() {
  return {
    type: types.AUTH_LOGOUT_REQUEST,
  }
}

export function logoutSuccess() {
  return {
    type: types.AUTH_LOGOUT_SUCCESS,
  }
}

export function logoutFailure(error) {
  return {
    type: types.AUTH_LOGOUT_FAILURE,
    payload: error
  }
}
