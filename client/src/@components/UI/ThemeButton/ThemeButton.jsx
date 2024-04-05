// import moduleCss
import moduleCss from './ThemeButton.module.css';
// import Component
import Button from '../Button/Button';
import useTheme from '../../../hooks/useTheme';
const ThemeButton = () => {
  // TODO onCLick , item , className 채우기
  const { setTheme } = useTheme();

  return <Button item='theme button' className={moduleCss.themeButton} />;
};

export default ThemeButton;
