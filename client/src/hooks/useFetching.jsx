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
      const locationString = inputRef.current.value;
      const { addressName, lat, lon } = await fetchLocationFromString(
        locationString,
      );
      // 기상청,  에어코리아 패칭
      const stationResponse = await fetchNearstStationName(lat, lon);
      const forecastWeather = await fetchForecastFromLocation(lat, lon);
      const forecastWeatherText = await fetchForecastText();
      const forecastAir = await fetchAirData(stationResponse);
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
