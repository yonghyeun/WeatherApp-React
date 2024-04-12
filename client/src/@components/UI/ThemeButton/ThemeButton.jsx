// import moduleCss
import moduleCss from './ThemeButton.module.css';
// import Component
import Button from '../Button/Button';
// import CustomHooks
import useDispatchTheme from '../../../hooks/useDispatchTheme';
const ThemeButton = () => {
  const handleTheme = useDispatchTheme();
  return (
    <Button
      item='theme button'
      className={moduleCss.themeButton}
      onClick={handleTheme}
    />
  );
};

export default ThemeButton;
