import { types } from './actions'

const initialState = {
  placeDetail: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.MESSAGE_FETCH_PLACE_DETAIL_SUCCESS:
      return {
        ...state,
        placeDetail: action.payload
      }
    default:
      return state
  }
}
