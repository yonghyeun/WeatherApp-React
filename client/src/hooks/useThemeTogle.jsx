import useTheme from './useTheme';

const useThemeToggle = () => {
  const { themeStatus, setThemeStatus } = useTheme();
  const handleClick = () => {
    const nextTheme = themeStatus === 'Dark' ? 'Light' : 'Dark';
    setThemeStatus(nextTheme);
    window.localStorage.setItem('themeStatus', nextTheme);
  };
  return handleClick;
};

export default useThemeToggle;
