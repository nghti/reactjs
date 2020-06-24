import * as types from '@/store/modules/dashboard/constants';
import makeActionCreator from '@/store/makeActionCreator';

export const userRequest = (user) => makeActionCreator(types.USERS_REQUEST, user);
export const userSuccess = (listUser) => makeActionCreator(types.USERS_SUCCESS, listUser);
export const userFailure = (error) => makeActionCreator(types.USERS_FAILURE, error);

// function makeAction(data) {
//   return {
//     type: types.USERS_REQUEST,
//     payload: { data },
//   };
// }
// const makeAction = function(data) {
//   return {
//     type: types.USERS_REQUEST,
//     payload: { data },
//   };
// }
// const makeAction = (data) => {
//   return {
//     type: types.USERS_REQUEST,
//     payload: { data },
//   };
// }

// export function userRequest(user) { return makeAction(user) }
// export const userRequest = function(user) { return makeAction(user) }
// export const userRequest = (user) => makeAction(user)

// export function userRequest(user) {
//   return {
//     type: types.USERS_REQUEST,
//     payload: { user },
//   };
// }

// export function userSuccess(listUser) {
//   return {
//     type: USERS_SUCCESS,
//     payload: listUser,
//   };
// }

// export function userFailure(error) {
//   return {
//     type: USERS_FAILURE,
//     payload: error,
//   };
// }
