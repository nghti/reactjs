export const types = {
  USERS_REQUEST: 'USERS_REQUEST',
  USERS_SUCCESS: 'USERS_SUCCESS',
  USERS_FAILURE: 'USERS_FAILURE',
};

export function userRequest(user) {
  return {
    type: types.USERS_REQUEST,
    payload: { user },
  };
}

export function userSuccess(listUser) {
  return {
    type: types.USERS_SUCCESS,
    payload: listUser,
  };
}

export function userFailure(error) {
  return {
    type: types.USERS_FAILURE,
    payload: error,
  };
}
