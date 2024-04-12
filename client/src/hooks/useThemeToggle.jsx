import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_THEME } from '../store/actions/actionTypes';
const useThemeToggle = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const handleTheme = () => {
    dispatch({ type: TOGGLE_THEME, payload: nextTheme });
  };

  return handleTheme;
};

export default useThemeToggle;
