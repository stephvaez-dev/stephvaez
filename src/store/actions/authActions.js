import { SET_ACCESS_TOKEN } from '../../constants/actionTypes'; // Define tus propios actionTypes

export function setAccessToken(token) {
  return { type: SET_ACCESS_TOKEN, token };
}
