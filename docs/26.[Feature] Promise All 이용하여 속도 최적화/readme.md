# 문제 정의

나의 웹 페이지에서는 데이터 요청을 다음과 같은 경우들에 보낸다.

### 검색 장소에서 특정 장소명이 검색 되었을 경우

![alt text](image.png)

```jsx
import { fetchLocationFromString } from '../utils/ApiUtils';
import { getCurrentTime } from '../utils/DateUtils';
import useEveryDispatcher from './useEveryDispatcher';
import useSearchRef from './useSearchRef';

import { useNavigate } from 'react-router-dom';

// 서울특별시 종로구의 위경도
const BASE_LAT = 37.5735042429813;
const BASE_LON = 126.978989954189;

const useHandleClick = () => {
  const inputRef = useSearchRef();
  const navigate = useNavigate();
  const { disptachLocation, disptachStatus } = useEveryDispatcher();

  const { fullDate } = getCurrentTime();

  const searchParams = new URLSearchParams([
    ['date', fullDate],
    ['lat', BASE_LAT],
    ['lon', BASE_LON],
  ]);

  const fetchingLocation = async () => {
    if (!inputRef.current?.value) return null;
    try {
      disptachStatus('LOADING');
      const locationName = inputRef.current.value;
      const { addressName, lat, lon } = await fetchLocationFromString(
        locationName,
      );

      searchParams.set('lat', lat);
      searchParams.set('lon', lon);
      disptachLocation({ addressName, lat, lon });
    } catch (e) {
      disptachStatus(e.message);
      console.error(e);
    }
  };

  const navigateToCardPage = () => {
    navigate(`/menu1?${searchParams.toString()}`);
  };

  return { fetchingLocation, navigateToCardPage };
};

export default useHandleClick;
```

해당 경우는 단순하게 카카오 API 한 곳에 한 번만의 데이터 요청이 일어나기 때문에

특별하게 리팩토링 할 부분이 없다.

### 날씨 정보 가져오는 경우

```jsx
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
    fetchingWeatherAir();
  }, [lat, lon]);
};

export default useFetchingWeatherAir;
```

해당 `useFetchingWeatherAir` 훅은 6개의 서로 다른 엔드포인트에 `API` 요청을 보낸다.
