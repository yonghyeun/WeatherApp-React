import { useState } from 'react';
import { fetchLocationFromString } from '../utils/ApiUtils';
import { getNxNyFromLatLong } from '../utils/CoordinateUtils';
import delay from '../utils/delay';
const delayTime = 1000;

const useWeather = (locationString) => {
  const [weawther, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      // ! loading 상태를 보여주기 위한 delay 함수
      delay(delayTime);
      const locationObject = await fetchLocationFromString(locationString);
      const { nx, ny } = getNxNyFromLatLong(locationObject);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      if (error)
        setTimeout(() => {
          setError(null);
        }, delayTime);
    }
  };
};
