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
import delay from '../utils/delay';

const DELAYTIME = 1000;

const useFetchingWeatherAir = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

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
        const forecastWeather = await fetchForecastFromLocation(lat, lon);
        const forecastWeatherText = await fetchForecastText(lat, lon);

        const stationName = await fetchNearstStationName(lat, lon);
        const forecastAir = await fetchAirData(stationName);
        const airPMText = await fetchAirTextPM();
        const airO3Text = await fetchAirTextO3();

        dispatchWeather(forecastWeather);
        dispatchWeatherText(forecastWeatherText);
        dispatchAir(forecastAir);
        dispatchAirText({ PM: airPMText, O3: airO3Text });
      } catch (e) {
        console.error(e);
        disptachStatus(e.message);
        await delay(DELAYTIME);
      } finally {
        disptachStatus('OK');
      }
    };

    fetchingWeatherAir();
  }, [lat, lon]);
};

export default useFetchingWeatherAir;
