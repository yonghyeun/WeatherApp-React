// import style
import style from './ThemeButton.module.css';
// import Component
import Button from '../Button/Button';

const ThemeButton = () => {
  // TODO onCLick , item , className 채우기
  return <Button item='theme button' className={style.themeButton} />;
};

export default ThemeButton;
