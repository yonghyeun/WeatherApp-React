// import styles
import moduleCss from './TempButton.module.css';
// import component
import Button from '../Button/Button';

const TempButton = () => {
  // TODO onClick , className , item 결정하기
  return <Button item='TempButton' className={moduleCss.tempButton} />;
};

export default TempButton;
