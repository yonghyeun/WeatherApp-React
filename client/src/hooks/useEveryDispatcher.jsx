import useDIspatchLocation from './useDispatchLocation';
import useDispatchWeather from './useDIspatchWeather';
import useDispatchStatus from './useDisptachStatus';
import useDispatchWeatherText from './useDIspatchWeatherText';
import useDispatchAir from './useDispatchAir';
import useDispatchAirText from './useDispatchAirText';

const useEveryDispatcher = () => {
  const dispatchWeather = useDispatchWeather();
  const dispatchWeatherText = useDispatchWeatherText();
  const disptachLocation = useDIspatchLocation();
  const disptachStatus = useDispatchStatus();
  const dispatchAir = useDispatchAir();
  const dispatchAirText = useDispatchAirText();

  return {
    dispatchWeather,
    dispatchWeatherText,
    disptachLocation,
    disptachStatus,
    dispatchAir,
    dispatchAirText,
  };
};

export default useEveryDispatcher;
