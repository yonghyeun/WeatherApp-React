import { useSelector } from 'react-redux';

const useWeatherState = (date, time) => {
  const { fetchedWeather } = useSelector((state) => state.data);
  if (date && !time) return fetchedWeather[date];
  if (date && time) return fetchedWeather[date][time];
  return fetchedWeather;
};

export default useWeatherState;
