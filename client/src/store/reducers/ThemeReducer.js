import Theme from '../../assets/style/Theme';

const themeReducer = (state, action) => {
  const isDark = action.payload;
  return {
    ...state,
    theme: isDark ? Theme.Dark : Theme.Light,
  };
};

export default themeReducer;
