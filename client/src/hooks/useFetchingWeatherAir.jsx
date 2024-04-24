import { useEffect } from 'react';
import {
  fetchAirData,
  fetchAirTextO3,
  fetchAirTextPM,
  fetchForecastFromLocation,
  fetchForecastText,
  fetchNearstStationName,
} from '../utils/ApiUtils';
import useEveryDispatcher from './useEveryDispatcher';
import useLocation from './useLocation';

import { useNavigate } from 'react-router-dom';
import delay from '../utils/delay';
const DELAY_TIME = 1000;

const useFetchingWeatherAir = () => {
  const { lat, lon } = useLocation();
  const navigate = useNavigate();
  const {
    dispatchWeather,
    dispatchWeatherText,
    disptachStatus,
    dispatchAir,
    dispatchAirText,
  } = useEveryDispatcher();
  useEffect(() => {
    const fetchingWeatherAir = async () => {
      try {
        const stationName = await fetchNearstStationName(lat, lon);

        const [
          forecastWeather,
          forecastWeatherText,
          forecastAir,
          airPMText,
          airO3Text,
        ] = await Promise.all([
          fetchForecastFromLocation(lat, lon),
          fetchForecastText(lat, lon),
          fetchAirData(stationName),
          fetchAirTextPM(),
          fetchAirTextO3(),
        ]);

        dispatchWeather(forecastWeather);
        dispatchWeatherText(forecastWeatherText);
        dispatchAir(forecastAir);
        dispatchAirText({ PM: airPMText, O3: airO3Text });
        disptachStatus('OK');
      } catch (e) {
        console.error(e);
        disptachStatus(e.message);
        await delay(DELAY_TIME);
        navigate('/');
        disptachStatus('OK');
      }
    };
    fetchingWeatherAir();
  }, [lat, lon]);
};

export default useFetchingWeatherAir;
