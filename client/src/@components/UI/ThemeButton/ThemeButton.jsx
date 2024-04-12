// import moduleCss
import moduleCss from './ThemeButton.module.css';
// import Component
import Button from '../Button/Button';
// import CustomHooks
import useThemeToggle from '../../../hooks/useThemeToggle';
const ThemeButton = () => {
  const handleTheme = useThemeToggle();
  return (
    <Button
      item='theme button'
      className={moduleCss.themeButton}
      onClick={handleTheme}
    />
  );
};

export default ThemeButton;
