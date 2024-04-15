import useDIspatchLocation from './useDispatchLocation';
import useDispatchWeather from './useDIspatchWeather';
import useDispatchStatus from './useDisptachStatus';
import useDispatchWeatherText from './useDispatchWeatherText';
import useSearchRef from './useSearchRef';

import delay from '../utils/delay';
import {
  fetchForecastFromLocation,
  fetchLocationFromString,
  fetchForecastText,
  fetchNearstStationName,
  fetchAirData,
} from '../utils/ApiUtils';
import { getAddressName } from '../utils/CoordinateUtils';
import useDispatchAir from './useDispatchAir';
const DELAYTIME = 1000;

const useFetching = () => {
  const dispatchWeather = useDispatchWeather();
  const dispatchWeatherText = useDispatchWeatherText();
  const disptachLocation = useDIspatchLocation();
  const disptachStatus = useDispatchStatus();
  const dispatchAir = useDispatchAir();
  const inputRef = useSearchRef();

  const fetchingWeather = async () => {
    if (!inputRef.current.value) return null;

    try {
      disptachStatus('LOADING');
      await delay(DELAYTIME);
      const locationString = inputRef.current.value;
      const locationObject = await fetchLocationFromString(locationString);
      const addressName = getAddressName(locationObject);
      const nearstStationName = await fetchNearstStationName(locationObject);
      const forecastWeather = await fetchForecastFromLocation(locationObject);
      const forecastText = await fetchForecastText();
      const forecastAir = await fetchAirData(nearstStationName);
      // TODO dispatch Promise All 로 변경하기
      disptachLocation(addressName);
      dispatchWeather(forecastWeather);
      dispatchWeatherText(forecastText);
      dispatchAir(forecastAir);
    } catch (e) {
      console.error(e);
      disptachStatus(e.message); // 에러시에는 에러 메시지를 status에 저장
      // TODO 에러 타입 별 에러 메시지 정리하기
      await delay(DELAYTIME);
    } finally {
      disptachStatus('OK');
    }
  };
  return fetchingWeather;
};

export default useFetching;
