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
    // ! TODO useEffect 가 두번씩 호출되는 이유가 뭘까 ?
    // ! 의존성 배열은 잘 들어가있는 것 같은데
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
        disptachStatus('OK');
      } catch (e) {
        console.error(e);
        disptachStatus(e.message);
        await delay(DELAY_TIME);
        navigate('/');
        disptachStatus('OK');
      }
    };
    console.log(lat, lon);
    fetchingWeatherAir();
  }, [lat, lon]);
};

export default useFetchingWeatherAir;
