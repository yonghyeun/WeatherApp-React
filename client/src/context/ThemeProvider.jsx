// TODO Redux 로 사용할까 ? 생각해보기
// import library
import { createContext } from 'react';
// import customHooks\
import useFirstTheme from '../hooks/useFirstTheme';

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const { theme, setThemeStatus, themeStatus } = useFirstTheme();
  return (
    <ThemeContext.Provider value={{ theme, setThemeStatus, themeStatus }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
