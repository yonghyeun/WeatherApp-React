import { TOGGLE_THEME } from '../actions/actionTypes';

const initalState = {
  theme: window.localStorage.getItem('theme') || 'light',
};

const themeReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const nextTheme = action.payload;
      window.localStorage.setItem('theme', nextTheme);
      return { ...state, theme: nextTheme };
    default:
      return state;
  }
};

export default themeReducer;
