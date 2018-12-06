import Cookies from 'js-cookie'

const TokenKey = 'DYJ-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  // console.log(token)
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
