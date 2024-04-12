import { TOGGLE_THEME } from '../store/actions/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

const useDispatchTheme = () => {
  const { theme } = useSelector((state) => state.theme);
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  const dispatch = useDispatch();
  const themeAction = { type: TOGGLE_THEME, payload: newTheme };

  return () => {
    dispatch(themeAction);
  };
};

export default useDispatchTheme;
