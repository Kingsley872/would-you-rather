export const SET_AUTHED_USER = 'SER_AUTHED_USER'
export const UNSET_AUTHED_USER = 'UNSER_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function unSetAuthedUser (id) {
  return {
    type: UNSET_AUTHED_USER,
    id,
  }
}
