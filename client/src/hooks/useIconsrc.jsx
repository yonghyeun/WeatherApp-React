import useWeatherState from './useWeatherData';
import IconPath from '../@constants/weatherIconURL';
const useIconSrc = (date, time) => {
  const { skyConditions, precipitationType } = useWeatherState(date, time);
  const nTime = Number(time.substring(0, 2));
  const timePeriod = nTime >= 6 && nTime <= 18 ? 'day' : 'night';
  if (precipitationType === 'sunny') {
    return `${IconPath}/${timePeriod}_${skyConditions}.png?raw=true`;
  }
  return `${IconPath}/${timePeriod}_${precipitationType}.png/?raw=true`;
};

export default useIconSrc;
