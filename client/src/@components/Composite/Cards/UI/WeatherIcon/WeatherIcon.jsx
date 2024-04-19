import useTimeState from '../../../../../hooks/useTimeState';
import useWeatherState from '../../../../../hooks/useWeatherData';
import IconUrl from '../../../../../@constants/weatherIconURL';
const WeatherIcon = () => {
  let src;
  // 1. 상태값 추출하기
  const { date, time } = useTimeState();
  const { skyConditions, precipitationType } = useWeatherState(date, time);
  // 2. am/pm 결정 , 날씨 상태 결정
  const nTime = Number(time.substring(0, 2));
  console.log(nTime, skyConditions, precipitationType);
  const timePeriod = nTime >= 6 && nTime <= 18 ? 'day' : 'night';
  if (precipitationType === 'sunny') {
    src = `${IconUrl}/${timePeriod}_${skyConditions}.png?raw=true`;
  } else {
    src = `${IconUrl}/${timePeriod}_${precipitationType}.png/?raw=true`;
  }

  return <img style={{ width: '20%' }} src={src} alt='Icon'></img>;
};

export default WeatherIcon;
