import useIconSrc from '../../../../../hooks/useIconsrc';
import moduleStyle from './WeatherIcon.module.css';

const WeatherIcon = ({ date, time, ...props }) => {
  const src = useIconSrc(date, time);
  // TODO style 속성 정리하기
  return (
    <img
      src={src}
      alt='icon'
      style={{ ...props }}
      className={moduleStyle.icon}
    ></img>
  );
};
export default WeatherIcon;
