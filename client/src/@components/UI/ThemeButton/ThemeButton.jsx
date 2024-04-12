// import moduleCss
import moduleCss from './ThemeButton.module.css';
// import Component
import Button from '../Button/Button';
// import CustomHooks
const ThemeButton = () => {
  return (
    <Button
      item='theme button'
      className={moduleCss.themeButton}
      // TODO onClick 채우기
    />
  );
};

export default ThemeButton;
