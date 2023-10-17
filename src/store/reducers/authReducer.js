import { SET_ACCESS_TOKEN } from '../../constants/actionTypes';

const initialState = {
  accessToken: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.token,
      };
    default:
      return state;
  }
}
