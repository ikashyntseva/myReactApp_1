import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/PageActions'

const initialState = {
  year: new Date().getFullYear(),
  photos: [],
  isFetching: false,
}

export function pageReducer(state = initialState, action) {
  debugger
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true }
    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false }
    default:
      return state
  }
}
