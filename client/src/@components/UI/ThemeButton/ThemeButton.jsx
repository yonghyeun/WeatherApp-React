// import moduleCss
import moduleCss from './ThemeButton.module.css';
// import Component
import Button from '../Button/Button';
import useTheme from '../../../hooks/useTheme';
const ThemeButton = () => {
  // TODO onCLick , item , className 채우기
  const { themeStatus, setThemeStatus } = useTheme();

  const handleClick = () => {
    const nextTheme = themeStatus === 'Dark' ? 'Light' : 'Dark';
    setThemeStatus(nextTheme);
    window.localStorage.setItem('themeStatus', nextTheme);
  };

  return (
    <Button
      item='theme button'
      className={moduleCss.themeButton}
      onClick={handleClick}
    />
  );
};

export default ThemeButton;
