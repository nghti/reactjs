import { types } from '@/store/dashboard/actions';

const initialState = {
  listUser: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.USERS_SUCCESS:
      return {
        ...state,
        listUser: action.payload,
      };
    default:
      return state;
  }
};
