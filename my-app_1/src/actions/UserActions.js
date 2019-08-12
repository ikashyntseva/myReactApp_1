import { getAvatarPromise } from '../util/avatar'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function handleLogin(callback) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(async r => {
      if (r.session) {
        let { first_name, id } = r.session.user
        let avatar = await getAvatarPromise()

        callback()
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { first_name, id, avatar },
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4) // запрос прав на доступ к photo
  }
}

export function handleLogout() {
  return function(dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.logout(r => {
      if (!r.session) {
        dispatch({
          type: LOGOUT_SUCCESS,
        })
      }
    })
  }
}
