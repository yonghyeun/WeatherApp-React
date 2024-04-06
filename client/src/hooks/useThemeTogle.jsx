import useTheme from './useTheme';

/**
 * ThemeButton 컴포넌트에서 사용되는 Hook 으로
 * 로컬스토리지에 저장된 값과 연동되는 state 인 themeStatus 값을
 * 변경되는 훅
 * @returns
 */
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
