import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/UserActions'

const initialState = {
  name: '',
  error: '', // добавили для сохранения текста ошибки
  isFetching: false, // добавили для реакции на статус "загружаю" или нет
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '', name: '' }

    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, name: action.payload.first_name }

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
