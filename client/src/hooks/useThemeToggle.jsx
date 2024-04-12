import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_THEME } from '../store/actions/actionTypes';
const useThemeToggle = () => {
  const { theme } = useSelector((state) => state.theme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const dispatch = useDispatch();

  return () => {
    dispatch({ type: TOGGLE_THEME, payload: nextTheme });
  };
};

export default useThemeToggle;
