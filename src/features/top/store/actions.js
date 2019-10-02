export const types = {
  MESSAGE_FETCH_PLACE_DETAIL_REQUEST: 'MESSAGE_FETCH_PLACE_DETAIL_REQUEST',
  MESSAGE_FETCH_PLACE_DETAIL_SUCCESS: 'MESSAGE_FETCH_PLACE_DETAIL_SUCCESS',
  MESSAGE_FETCH_PLACES_DETAIL_FAILURE: 'MESSAGE_FETCH_PLACES_DETAIL_FAILURE',
}

export const fetchPlaceDetailRequest = (placeId) => {
  return {
    type: types.MESSAGE_FETCH_PLACE_DETAIL_REQUEST,
    payload: {placeId}
  }
}

export const fetchPlaceDetailSuccess = (placeDetail) => {
  return {
    type: types.MESSAGE_FETCH_PLACE_DETAIL_SUCCESS,
    payload: placeDetail
  }
}
