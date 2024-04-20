import useIconSrc from '../../../../../hooks/useIconsrc';
import moduleStyle from './WeatherIcon.module.css';

const WeatherIcon = ({ date, time }) => {
  const src = useIconSrc(date, time);
  // TODO style 속성 정리하기
  return <img src={src} alt='icon' className={moduleStyle.icon}></img>;
};
export default WeatherIcon;
