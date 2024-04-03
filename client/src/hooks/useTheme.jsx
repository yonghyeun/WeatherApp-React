import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

/**
 * useTheme 값은 ThemeContext 가 제공하는 Context 값을 받아 사용하는 커스텀 훅
 * @returns
 */
const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};

export default useTheme;
