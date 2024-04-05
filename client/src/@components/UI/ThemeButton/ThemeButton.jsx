// import moduleCss
import moduleCss from './ThemeButton.module.css';
// import Component
import Button from '../Button/Button';
// import CustomHooks
import useThemeToggle from '../../../hooks/useThemeTogle';
const ThemeButton = () => {
  const toggleTheme = useThemeToggle();
  return (
    <Button
      item='theme button'
      className={moduleCss.themeButton}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
