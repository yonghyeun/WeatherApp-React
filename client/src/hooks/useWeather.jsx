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
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (locationString) => {
    try {
      setLoading(true);
      // ! loading 상태를 보여주기 위한 delay 함수
      delay(DELAYTIME);
      const locationObject = await fetchLocationFromString(locationString);
      const forecastWeater = await fetchForecastFromLocation(locationObject);
      setWeather(forecastWeater);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      if (error)
        setTimeout(() => {
          setError(null);
        }, DELAYTIME);
    }
  };

  return { fetchWeather, weather, error, loading };
};

export default useWeather;
