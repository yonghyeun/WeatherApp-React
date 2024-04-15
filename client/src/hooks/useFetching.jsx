import useEveryDispatcher from './useEveryDispatcher';
import useSearchRef from './useSearchRef';

import delay from '../utils/delay';
import {
  fetchForecastFromLocation,
  fetchLocationFromString,
  fetchForecastText,
  fetchNearstStationName,
  fetchAirData,
  fetchAirTextPM,
  fetchAirTextO3,
} from '../utils/ApiUtils';
import { getAddressName } from '../utils/CoordinateUtils';

const DELAYTIME = 1000;

const useFetching = () => {
  const {
    dispatchWeather,
    dispatchWeatherText,
    disptachLocation,
    disptachStatus,
    dispatchAir,
    dispatchAirText,
  } = useEveryDispatcher();

  const inputRef = useSearchRef();

  const fetchingWeather = async () => {
    if (!inputRef.current.value) return null;

    try {
      disptachStatus('LOADING');
      await delay(DELAYTIME);
      // TODO Promise.all 로 모두 변경하기
      const locationString = inputRef.current.value;
      const locationObject = await fetchLocationFromString(locationString);
      const addressName = getAddressName(locationObject);
      const nearstStationName = await fetchNearstStationName(locationObject);
      const forecastWeather = await fetchForecastFromLocation(locationObject);
      const forecastWeatherText = await fetchForecastText();
      const forecastAir = await fetchAirData(nearstStationName);
      const airPMText = await fetchAirTextPM();
      const airO3Text = await fetchAirTextO3();

      // TODO dispatch  All 로 변경하기
      disptachLocation(addressName);
      dispatchWeather(forecastWeather);
      dispatchWeatherText(forecastWeatherText);
      dispatchAir(forecastAir);
      dispatchAirText({ PM: airPMText, O3: airO3Text });
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
