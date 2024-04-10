import { useState } from 'react';
import {
  fetchForecastFromLocation,
  fetchLocationFromString,
} from '../utils/ApiUtils';
import delay from '../utils/delay';
const DELAYTIME = 1000;

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const fetchWeather = async (locationString) => {
    try {
      setisLoading(true);
      // ! isLoading 상태를 보여주기 위한 delay 함수
      await delay(DELAYTIME);
      const locationObject = await fetchLocationFromString(locationString);
      const forecastWeater = await fetchForecastFromLocation(locationObject);
      setWeather(forecastWeater);
    } catch (e) {
      console.error(e);
      setError(e);
      setTimeout(() => {
        setError(null);
      }, DELAYTIME);
    } finally {
      setisLoading(false);
    }
  };

  return { fetchWeather, weather, error, isLoading };
};

export default useWeather;
