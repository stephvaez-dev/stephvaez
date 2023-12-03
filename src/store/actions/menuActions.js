// En menuActions.js
export const SET_MENU_OPEN = 'SET_MENU_OPEN';

export const setMenuOpen = (isOpen) => ({
  type: SET_MENU_OPEN,
  payload: isOpen,
});
