import Theme from '../../assets/style/Theme';
const initalState = {
  theme: window.localStorage.getItem('theme') || 'Light',
};

const themeReducer = (state = initalState, action) => {
  const isDark = action.payload;
  window.localStorage.setItem('theme', isDark ? 'Dark' : 'Light');

  return {
    ...state,
    theme: isDark ? Theme.Dark : Theme.Light,
  };
};

export default themeReducer;
