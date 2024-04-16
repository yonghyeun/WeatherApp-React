import useDispatchTime from '../../../../../hooks/useDIspatchTime';
import moduleStyle from './ChangeBar.module.css';

const ChangeBar = () => {
  const handleTime = useDispatchTime();
  return (
    <input
      className={moduleStyle.ChangeBar}
      onChange={handleTime}
      type='range'
      min={0}
      max={23}
    />
  );
};

export default ChangeBar;
