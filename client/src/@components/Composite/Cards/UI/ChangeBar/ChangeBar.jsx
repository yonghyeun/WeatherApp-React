import useDispatchTime from '../../../../../hooks/useDIspatchTime';
import useTimeState from '../../../../../hooks/useTimeState';
import moduleStyle from './ChangeBar.module.css';

const ChangeBar = () => {
  const handleTime = useDispatchTime();
  const { time } = useTimeState();
  const ticks = [0, 6, 12, 18, 23]; // Define the hours you want ticks at

  return (
    <div className={moduleStyle.sliderContainer}>
      <input
        className={moduleStyle.ChangeBar}
        onChange={handleTime}
        type='range'
        min='0'
        max='23'
        value={Number(time.substring(0, 2))}
        step='1'
      />
      <div className={moduleStyle.tickMarks}>
        {ticks.map((num, index) => (
          <span key={index} style={{ left: `${(num / 23) * 100}%` }}>
            {num}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChangeBar;
