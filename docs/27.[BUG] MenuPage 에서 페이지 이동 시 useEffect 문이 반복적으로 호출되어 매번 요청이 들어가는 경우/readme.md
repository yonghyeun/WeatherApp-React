## InCover Date : 2024-04-24

## Fixed Date : 2024-04-24

### **Describe the bug**

![image](https://github.com/yonghyeun/WeatherApp-React/assets/123540354/6698c1ca-7cb7-45e5-b028-5a3c12636bb2)

해당 경로 `/menu1?...` 에서 `/` 경로로 이동 한 후

다시 `/menu1 ? .. ` 경로로 이동 할 경우 `/menu1 ? ..` 에서 호출되는 컴포넌트 내부에 존재하는 `useEffect` 가 매번 실행되어

장소가 변경되지 않았음에도 불구하고 요청이 매번 일어나고 있다.

```jsx
import { createBrowserRouter } from 'react-router-dom';
// Element import
import Dashboard from '../Dashboard.jsx';

// Page import
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import AboutPage from '../pages/AboutPage/AboutPage.jsx';
import MenuPage from '../pages/MenuPage/MenuPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/:menuId',
        element: <MenuPage />, // 해당 부분에서 useEffect 가 실행되어 API 요청을 보내도록 설계되어 있음
      },
    ],
  },
]);

export default router;
```

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

실행되는 `useEffect` 문은 다음과 같다.

이 때 의존성 배열에 존재하는 `lat , lon` 값은 `Redux` 에 존재하는 값으로 이론상 한 번 `Redux` 에 저장된 `lat , lon` 값이 변하지 않는다면

실행되면 안된다.

하지만 `lat , lon` 값 변화 유무와 상관 없이 `/menu1 ? ..` 페이지와 `/` 경로로 이동을 반복 할 경우

매 이동시 마다 `useEffect` 문이 실행되어 불필요한 패칭이 일어난다.

### **Steps to reproduce the behavior**

`MenuPage` 컴포넌트는 `/menu1 ? ..` 경로 일 때 마운트 되고 `/` 경로로 이동 할 때 언마운트 되는 컴포넌트이다.

언마운트와 마운트를 반복하며 매 마운트 때 마다 `useEffect` 문이 새롭게 정의되고

그로 인해 새로 정의된 `useEffect` 로 인해 매번 패칭이 일어나는 것으로 생각된다.

1. `useFetchingWeatherAir` 훅이 발동되는 부분을 `mount  , unmount` 가 반복되는 `MenuPage` 컴포넌트가 아닌 `unMount` 가 자주 일어나지 않는 컴포넌트 내부로 변경시켜보자

```jsx
import moduleCss from './ContentMain.module.css';
import useFetchingWeatherAir from '../../../hooks/useFetchingWeatherAir';
import { Outlet } from 'react-router-dom';
const ContentMain = () => {
  useFetchingWeatherAir(); // 2. 호출부위를 mount , unmount 가 자주 일어나지 않는 상위 컴포넌트로 변경하였음
  return (
    <main className={moduleCss.contentMain}>
      <Outlet /> // 1. 기존 useEffect 로 호출이 진행되던 부분
    </main>
  );
};

export default ContentMain;
```

이처럼 `mount , unmount` 가 자주 일어나지 않는 곳으로 커스텀 훅을 변경해주었다.

이제 `useFetchingWeatherAir` 훅은 `lat , lon` 상태 값이 변경되지 않는 한 실행되지 않는다.

### **ScreenShot**

![image](https://github.com/yonghyeun/WeatherApp-React/assets/123540354/ec629674-b0c3-4537-88fc-8ebfa2954187)
