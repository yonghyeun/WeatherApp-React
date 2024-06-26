# 라우팅 기능과 패칭 기능 분리

## 문제 정의

![alt text](image.png)

현재 대시보드의 전체적인 윤곽은 디자인을 제외하고 모두 만들어졌다.

현재 대시보드에서 카드 뉴스 페이지를 렌더링 하기 위한 플로우 차트는 다음과 같다.

![alt text](image-1.png)

현재 이 과정의 문제점은 세 가지가 있다.

### 패칭 이후의 액션이 존재하지 않는다.

![alt text](image-2.png)

현재 `/` 경로에 대한 페이지는 다음과 같이 생겼으며

검색을 하여 모든 데이터를 패칭 해온 이후엔 직접 수동으로

사이드바에 존재하는 `menu1` 을 클릭하여 카드 뉴스 컴포넌트가 존재하는 페이지로 이동해야 한다.

### 패칭이 일어나지 않은 채 `menu1` 에 접근하면 런타임 에러가 발생한다.

![alt text](image-3.png)

`menu1` 페이지로 들어갔을 경우 `react-router-dom` 에서 렌더링 되는 `page` 컴포넌트는

전역 `state` 에 존재하는 여러 `fetched .. state` 들을 이용해 컴포넌트를 구성하는데

패칭이 일어나지 않았다면 전역 상태 값도 비어있기 때문에 런타임 에러가 발생한다.

### 해당 날씨 정보 데이터를 공유하기가 불가능하다.

현재 나는 어떤 시간, 어떤 장소와 상관 없이 모두 `/menu1` 경로에서 정보를 렌더링 하고 있다.

이에 **서울특별시 도봉구 도봉동** 을 입력한 사용자와 **제주도 특별자치시 애월읍** 을 입력한 사용자 모두 동일한 경로를 가졌다는 것이며

해당 페이지 경로를 아무리 공유해도 정보를 공유하는 것이 불가능하단 것을 의미한다.

## 문제 해결 방법 모색

### `Redux` 에 존재하는 상태 `URL query parameter` 로 변경하기

페이지를 공유 가능하게 하기 위해서

`Redux` 내부에서 저장되는 전역 상태 중 일부를 `URL` 의 쿼리 파라미터로 변경해줘야겠다.

날씨 정보 공유와 가장 상관있는 전역 상태는 아무래도 일자와 장소일 것이다.

그래서 쿼리 파라미터로 `date , lat , lon` 을 추가해주기로 했다.

> 위경도가 아닌 `location` 인 문자열로 해줄까도 생각했지만
> 인코딩되어 `%E6%A7....` 이런식으로 뚱뚱하고 못생긴 경로를 생각하니 끔찍했다.
> 그래서 `lat , lon` 으로 변경해주기로 했다.

그러면 아마 카드 컴포넌트가 렌더링 되는 경로는 `/menu1?date=20240422&lat=127&lon=37` 이런식일 것이다.

### 컴포넌트들의 이벤트 핸들러 책임 분리

#### `SearchArea / Button`

![alt text](image-4.png)

현재 `SearchArea` 컴포넌트 내부에 존재하는 버튼 컴포넌트는 온클릭 이벤트로

`useFetching` 훅을 이용해 모든 데이터를 패칭해온다.

하지만 이제 해당 버튼은 카카오 API 를 이용해 문자열로 된 위치 정보를 위경도 좌표로 받아온 후

`URL query parameter` 인 `lat , lon` 에 넣어 `react-router-dom` 의 `useNavigate` 혹은 `redirect` 를 이용해 리다이렉트 시키는 역할만 할 것이다.

#### `SideCard`

![alt text](image-5.png)

해당 영역 우측에 존재하는 `SideCard` 컴포넌트는 본래 온클릭 이벤트로

`Redux` 내부 전역 상태에 존재하던 `date` 상태값을 변경해주었다.

하지만 이제는 `URL query paramter` 인 `date` 의 값을 변경해 `redirect` 시키도록 변경해주자

### `API` 패칭은 `react-router-dom loader` 메소드가 아닌 `useEffect` 를 이용하자

라우팅을 하려고 하니 그럼 패칭도 `react-router-dom` 의 `loader` 함수로 지정해서 할까 ? 생각했었는데

현재 내 컴포넌트들은 `APIstatus state` 에 따라 렌더링 되는 양상이 다르다.

현재는 `SearchArea` 에 존재하는 버튼이 로딩중일 때엔 빙글빙글 돌아가며 추후에는 카드 컴포넌트 들도 로딩중일 땐 로딩 화면이 뜨게 변경하려고 한다.

`react-router-dom` 의 `loader` 메소드를 이용하게 되면 `Redux` 내부에 저장되어 있는 상태값들을 변경하는 것이 불가능하다.

그러니 `SearchArea` 내부에서 `useEffect` 를 이용해 데이터들을 패칭해오고

`Redux` 내부에 존재하는 여러 상태값들을 변경해주도록 하자

## 문제 해결 과정

### `router` 경로를 따로 생성해야 하나 ?

```jsx
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
        element: <MenuPage />,
      },
    ],
  },
]);
```

현재 나의 `router` 경로는 다음과 같이 생겼다.

나는 쿼리 파라미터들도 따로 `router` 내부에 정의해줘야 하나 하고 공식문서를 찾아보니

따로 지정해줄 필요 없이 `router` 에선 `/:parameter` 만 지정해주고

쿼리 파라미터들은 `useSearchParams` 를 이용해 직접적으로 접근해야 한다고 한다.

### `useFetching` 훅 1차 수정하기

```jsx
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
      // TODO Promise.all 로 모두 변경하칭칭
      const locationString = inputRef.current.value;

      //  카카오 API 패칭
      const locationObject = await fetchLocationFromString(locationString);
      const addressName = getAddressName(locationObject);

      // 기상청 , 에어코리아 패칭
      const stationResponse = await fetchNearstStationName(locationObject);
      const forecastWeather = await fetchForecastFromLocation(locationObject);
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
```

현재 데이터를 패칭해오는 `useFetching` 훅은 카카오 API 패칭, 기상청 API 패칭 , 에어코리아 API 패칭 세 가지 모든 일을 동시에 하고 있다.

나는 현재 라우팅을 위해 카카오 API 패칭과 기상청 , 에어코리아 API 패칭 두 가지 영역으로 분리한 후

각각 다른 시점에 패칭을 하고자 한다.

우선 `useFetching` 훅을 분리하기 전 리팩토링을 통해 각 메소드 별 의존성을 제거해주도록 하자

예를 들어 `FetchingWeather` 메소드 내부 중

```jsx
// 카카오 API 패칭
const locationObject = await fetchLocationFromString(locationString);
const addressName = getAddressName(locationObject);

// 기상청 , 에어코리아 패칭
const stationResponse = await fetchNearstStationName(locationObject);
const forecastWeather = await fetchForecastFromLocation(locationObject);
```

이 부분에서 기상청 , 에어코리아 패칭 부분에서 카카오 API패칭의 결과값인 `locationObject` 을 인수로 받고 있기 때문에

두 메소드는 분리 하기가 힘들다.

하지만 메소드 내부를 살펴보면 `fetchNearstStationName` , `fetchForecastFromLocation` 메소드 모두 `locationObject` 내부에 존재하는 위경도 값만을 이용한다.

추후 나는 `fetchNearstStationName` , `fetchForecastFromLocation` 메소드를 호출 할 때 `lat , lon query params` 를 이용해줄 것이기 때문에

기상청, 에어코리아 패칭 부분에서 인수로 `lat , lon` 을 받아주도록 변경해주자

```jsx
// 카카오 API 패칭
const locationString = inputRef.current.value;
const { addressName, lat, lon } = await fetchLocationFromString(locationString);
// 기상청,  에어코리아 API 패칭
const stationResponse = await fetchNearstStationName(lat, lon);
const forecastWeather = await fetchForecastFromLocation(lat, lon);
```

메소드 내부를 변경하여 `fetchLocationFromString` 메소드가 `locationObject` 가 아니라 `addressName , lat , lon` 들을 반환하도록 변경해주었다.

이를 통해 `fetchingWeather` 메소드를 분리해 줄 준비는 모두 끝났다.

### `SearchArea.Normal button` 컴포넌트 이벤트 핸들러 수정하기

```jsx
const SearchNormal = () => {
  const handleFetching = useFetching();

  return (
    <SearchForm>
      <SearchInput />
      <SearchButton onClick={handleFetching} />
    </SearchForm>
  );
};
```

![alt text](image-4.png)

현재 해당 영역의 버튼 온클릭 이벤트 핸들러엔 `useFetching` 메소드에서 반환하는 `fetchingWeather` 메소드가 부착되어 있다.

이제 해당 버튼의 역할은 `fetchingWeather` 전부가 아니라 일부가 되었다.

![alt text](image-6.png)

이제 버튼이 클릭 되면 다음과 같은 일들만 하도록 변경해주자

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

      disptachLocation(addressName);
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

버튼에 부착해줄 `useHandleClick` 훅을 생성해주었다.

해당 훅은 두 가지 메소드를 반환하는데

하나는 `inputRef.current.value` 에 적힌 주소 값을 패칭해와 주소명과 위경도 이름으로 패칭해오는 `fetchingLocation` 메소드와

`fetchingLocation` 메소드가 진행되며 생성된 `searchParams` 의 쿼리문에 따라 라우팅 시키는 메소드이다.

이 때 `fetchLocationFromString` 메소드에서 에러가 발생하여 `lat , lon` 값이 지정되지 않을 수도 있기 때문에 `searchParams` 객체를 생성해줄 때 기본값으로 서울특별시 종로구의 위경도를 넣어 생성해주고

패칭이 성공적으로 일어났다면 `set` 을 이용해 수정해주도록 변경하였다.

**이전의 `useFetching` 과 다른 점은 `finally` 부분이 존재하지 않으며 `APIStatus` 를 `OK` 로 변경하지 않고 `LOADING` 상태로 놔둔다는 것이다.** 그 이유는 `/:menu1?...` 로 라우팅 이후 쿼리 파라미터에 따라 날씨 , 미세먼지 정보를 다시 패칭 해올 것이기 때문이다.

![alt text](image-7.png)

어떤 주소를 입력하면 `date , lat , lon` 쿼리 파라미터에 맞춰 라우팅 되는 모습을 볼 수 있다.

### 로딩중일 경우에는 로딩중인 카드 컴포넌트가 보이도록 수정하기

현재 가장 크게 직면한 문제는 라우팅 이후

자료들이 패칭 되지 않았기 때문에 카드 컴포너트를 구성 할 때 런타임 에러가 발생한다는 점이다.

이에 자료가 패칭 되기 전 카드 컴포넌트들이 렌더링 되지만 로딩 중임을 표현해주는 컴포넌트를 생성해보자

#### `Loading` 컴포넌트 생성

```jsx
import useTheme from '../../../hooks/useTheme';

const Loading = () => {
  const theme = useTheme();

  if (theme === 'dark') {
    return <div class='spinner-border text-light' role='status'></div>;
  }

  return <div class='spinner-border text-dark' role='status'></div>;
};

export default Loading;
```

부트스트랩에서 쌈뽕해보이는 `Loading` 컴포넌트 하나를 가져와준다.

이후 `MenuPage` 컴포넌트에서 `APIStatus` 에 따라 분기처리 해준다.

```jsx
import moduleStyle from './MenuPage.module.css';

import { FlexColumn } from '../../@components/UI/Flex/Flex';
import WeatherTemplate from '../../@components/Templates/WeatherTemplate/WeatherTemplate';
import AirTemplate from '../../@components/Templates/WeatherTemplate/AirTemplate';

import Loading from '../../@components/UI/Loading/Loading';

import useAPIStatus from '../../hooks/useAPIStatus';
// TODO 내용 채우기
const MenuPage = () => {
  const status = useAPIStatus();

  if (status !== 'OK') {
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className={moduleStyle.menu}
      >
        <Loading />
      </section>
    );
  }

  return (
    <section className={moduleStyle.menu}>
      <FlexColumn>
        <WeatherTemplate />
        <AirTemplate />
      </FlexColumn>
    </section>
  );
};

export default MenuPage;
```

컴포넌트 내부에서 분기처리하여 렌더링 하는 것을 좋아하지는 않지만 `react-router-dom` 에서 `<Outlet>` 컴포넌트 내부에 들어갈 수 있는 컴포넌트는 하나이기 때문에 어쩔 수 없이

분기처리 해주도록 한다.

![alt text](image-8.png)

이를 통해 로딩중일 때에는 메인 페이지에서 로딩중임을 알 수 있게 해주었다.

> 원래는 `Card` 컴포넌트에서 로딩중일 경우 분기처리를 해주려고 했으나
> 기존 카드 컴포넌트들의 크기를 유지하면서 로딩 상태를 보여주려고 하니 쉽지 않았다.
> 만약 각 컴포넌트들의 크기가 `px` 단위나 `%` 단위 등으로 잘 정리되어 있었다면 내부 아이템들에 로딩 상태를 넣어줬겠지만
> 나는 모두 `flex-box` 를 이용해 만들어주었기 때문에 쉽지 않았다.
> 그래서 조금 간편한 방법을 선택했다.

### `/menu1/?date= .. & lat = .. & lon = ..` 으로 라우팅 됐을 때 마저 정보 패칭해오기

이전 단계에서 검색 창에 장소를 입력하면 `APIStatus` 를 `Loading` 으로 변경하고

`/menu1/?date= .. & lat = .. & lon = ..` 장소로 라우팅 시키는 것 까지 완성했다.

이제 `menu1/?date= .. & lat = .. & lon = ..` 으로 라우팅 됐다면 `URL query params` 들을 이용해서 패칭 시키도록 해주자

#### `useFetchingWeatherAir`

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
```

다음처럼 `URL searchParmas` 에 있는 `lat ,lon` 값을 받아 기상 정보들을 패칭해오는 훅을 생성해주자

해당 훅은 `useEffect` 로 감싸져있기 때문에 불러오는 컴포넌트가 렌더링 된 후 호출된다.

```jsx
import moduleStyle from './MenuPage.module.css';

import { FlexColumn } from '../../@components/UI/Flex/Flex';
import WeatherTemplate from '../../@components/Templates/WeatherTemplate/WeatherTemplate';
import AirTemplate from '../../@components/Templates/WeatherTemplate/AirTemplate';

import Loading from '../../@components/UI/Loading/Loading';

import useAPIStatus from '../../hooks/useAPIStatus';
import useFetchingWeatherAir from '../../hooks/useFetchingWeatherAir';
// TODO 내용 채우기
const MenuPage = () => {
  const status = useAPIStatus();
  useFetchingWeatherAir();

  if (status !== 'OK') {
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className={moduleStyle.menu}
      >
        <Loading />
      </section>
    );
  }

  return (
    <section className={moduleStyle.menu}>
      <FlexColumn>
        <WeatherTemplate />
        <AirTemplate />
      </FlexColumn>
    </section>
  );
};

export default MenuPage;
```

이후 `MenuPage` 에서 해당 훅을 호출해주면 `MenuPage` 가 처음 렌더링 될 때 로딩 중인 페이지가 렌더링 된 후 호출된다.

![alt text](result.gif)

### `menu1` 버튼을 클릭했을 때 발생하는 런타임 에러 해결하기

![alt text](image-9.png)

사이드바에 존재하는 `menu1` 버튼을 누르면 `/menu1` 경로로 라우팅 되도록 설계해놨었다.

이 때 `/menu1` 페이지로 라우팅 된다면 런타임 에러가 발생한다.

![alt text](image-10.png)

해당 런타임 에러는 다음과 같은 이유로 발생한다.

- 메뉴 페이지를 누를 때 `API state` 는 `OK` 인 상태이다.
- `/menu` 경로로 라우팅 되어 `MenuPage` 컴포넌트가 호출된다.
- `API state` 가 `OK` 인 상태에서 `MenuPage` 컴포넌트가 호출되어 전역 상태에서 `fetchedData ..` 들을 불러오려 하나 존재하지 않아 런타임 에러가 발생한다.

#### 어떻게 해결할까 ?

현재 변경된 로직의 플로우차트는 다음과 같다.

![alt text](image-11.png)

현재 문제가 발생하는 부분은 `fetchedData ..` 부분들이 전역 상태에 존재하지 않을 때 `/menu` 페이지로 리다이렉트 될 때 발생한다.

우선 이 부분은 `MenuPage` 렌더링에 영향을 미치는 상태는 `APIstatus State` 인데

`Apistatus State` 를 `Loading` 상태로 만드는 컴포넌트가 찾기 버튼 하나 뿐이라 이런 문제가 발생했다.

`MenuPage` 가 로딩중이게 될 수 있는 상황은 장소를 입력하고 찾기 버튼을 누르는 경우 말고 다른 경우들도 존재한다.

- 메인 페이지에서 `menu1` 버튼을 눌러 `/menu1?date..` 경로로 라우팅 된 경우 , 라우팅 이후 쿼리문을 이용해 데이터를 패칭해와야 한다.
- 누군가가 공유한 `URL` 경로를 통해 처음 접속한 경우 해당 경로에 맞춰 데이터를 패칭해와야 한다.

그러니 `MenuPage` 가 로딩중일 수 있는 상황은 **검색 버튼을 눌렸거나 , 이전에 검색되지 않은 `date , lat , lon` 쿼리문을 가진 `URL` 경로로 라우팅** 됐을 때 이다.

해결하기 위한 스텝을 생각해보자

#### 라우팅 되기 위한 `searchParams` 를 구하는 방법

```jsx
import React from 'react';

import Sidebar from '../../@components/Composite/Sidebar/Sidebar';

const SidebarLayout = () => {
  return (
    <Sidebar>
      <Sidebar.Title />
      <Sidebar.Nav>
        <Sidebar.Ul>
          <Sidebar.List to='/menu1' content='menu1' />
          <Sidebar.List to='/menu2' content='menu2' />
          <Sidebar.List to='/menu3' content='menu3' />
        </Sidebar.Ul>
      </Sidebar.Nav>
    </Sidebar>
  );
};

export default SidebarLayout;
```

![alt text](image-12.png)
현재 해당 컴포넌트에서 `menu서` 버튼을 눌렀을 때 라우팅 될 `to = ...` 에

할당 될 쿼리 파라미터를 넣어주도록 하자

이를 통해 해당 버튼을 누르면 쿼리 파라미터를 갖는 위치로 라우팅 되도록 말이다.

1. 우선 쿼리문으로 사용될 수 있는 `date , lat , lon` 을 런타임에 저장되는 메모리인 `Redux` 뿐이 아닌 `localStorage , sessionStorage` 에도 저장해주도록 하자
2. `menu1` 버튼을 눌렀을 때 리다이렉트 시킬 경로에 사용 될 `search parameter` 를 반환하는 훅을 생성하자.
   2.1 해당 훅에선 `date , lat , lon` 값을 반환한다.
   2.2 이 때 반환되는 `date , lat , lon` 들은 다음과 같은 우선순위로 반환된다.
   - `window.searchParams => redux => session => local => 기본 설정`
     다음과 같은 우선순위를 갖는 이유는 다음과 같다.
   - 만약 사용자가 `/menu1?date ..` 와 같은 경로로 최초 접근 했을 때엔 최초 접근 할 때 이용한 `searchParams` 를 우선적으로 하여 접근해야 한다.
   - 만약 사용자가 브라우저를 이용하면서 검색을 하였다면 `redux` 내부에 `date , lat , lon` 값이 존재할테니 접근한다.
   - 만약 사용자가 이용 중 새로고침 하여 런타임 메모리인 `redux` 내부엔 저장된 값이 존재하지 않을 때엔, 세션 메모리에서 값을 가져온다.
   - 만약 사용자가 세션 메모리에도 값이 존재하지 않을 경우엔 `localStroage` 에 저장되어 있는 값을 가져온다.
   - 만약 모든 저장소에도 데이터가 존재하지 않는다면 기본적으로 설정된 값을 파라미터로 이용한다.

```jsx
import {
  FETCHING_AIR,
  FETCHING_AIRTEXT,
  FETCHING_LOCATION,
  FETCHING_WEATHER,
  FETCHING_WEATHERTEXT,
} from '../actions/actionTypes';
// TODO inital State localStorage 에서 가져오기

import {
  saveToSessionStorage,
  getWeatherData,
  getAirData,
  getParsingWeatherText,
  getParsingAirText,
} from './utils';

// TODO initalState 추가하기

const inistalState = {
  fetchedLocation: {
    lat:
      new URLSearchParams(window.location.search).get('lat') ||
      sessionStorage.getItem('lat') ||
      localStorage.getItem('lat') ||
      '127.00060686405',
    lon:
      new URLSearchParams(window.location.search).get('lon') ||
      sessionStorage.getItem('lon') ||
      localStorage.getItem('lon') ||
      '37.5868624440018',
    // TODO addressName 도 따로 가져오도록 변경하기
    addressName:
      sessionStorage.getItem('addressName') ||
      localStorage.getItem('addressName') ||
      '서울특별시 종로구 혜화동',
  },
};

const dataReducer = (state = inistalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHING_LOCATION:
      const fetchedLocation = payload;
      saveToSessionStorage(fetchedLocation);
      console.log(fetchedLocation);
      return { ...state, fetchedLocation };
    case FETCHING_WEATHER:
      const fetchedWeather = getWeatherData(payload);
      return { ...state, fetchedWeather };
    case FETCHING_WEATHERTEXT:
      const fetchedWeatherText = getParsingWeatherText(payload);
      return { ...state, fetchedWeatherText };
    case FETCHING_AIR:
      const fetchedAir = getAirData(payload);
      return { ...state, fetchedAir };
    case FETCHING_AIRTEXT:
      const fetchedAirText = getParsingAirText(payload);
      return { ...state, fetchedAirText };
    default:
      return state;
  }
};

export default dataReducer;
```

우선 `dataReducer` 에서 `initalState` 에서 초기값을 정해주었다.

이를 통해 새로고침 되더라도 `Redux` 에는 쿼리파라미터 , 세션 스토리지, 로컬 스토리지 , 기본값을 우선으로 하여 `store` 가 생성된다.

이후 쿼리 파라미터로 사용될 `lat , lon` 값도 `Redux` 에서 관리 될 수 있도록

이전엔 `adreeName` 만 `Redux` 에서 저장했다면 `lat , lon` 도 `Redux` 에 저장 될 수 있도록 하게 한다.

이렇게 `Redux` 내부에서 `date,  lat , lon` 모두 관리하고 있기 때문에

해당 경로로 라우팅 시키는 버튼의 라우팅 경로를 `/menu1` 이 아닌

쿼리파라미터를 조합해 작성해주자

```jsx
import React from 'react';
import useLocation from '../../hooks/useLocation';
import useTimeState from '../../hooks/useTimeState';
import Sidebar from '../../@components/Composite/Sidebar/Sidebar';

const SidebarLayout = () => {
  const { lat, lon } = useLocation();
  const { date } = useTimeState();
  return (
    <Sidebar>
      <Sidebar.Title />
      <Sidebar.Nav>
        <Sidebar.Ul>
          <Sidebar.List
            to={`/menu1?date=${date}&lat=${lat}&lon=${lon}`}
            content='기상예보'
          />
          <Sidebar.List to='/menu2' content='menu2' />
          <Sidebar.List to='/menu3' content='menu3' />
        </Sidebar.Ul>
      </Sidebar.Nav>
    </Sidebar>
  );
};

export default SidebarLayout;
```

![alt text](result2.gif)

이를 통해 메인페이지에서 기상 예보칸을 클릭하더라도 런타임 오류 없이

이전에 검색했던 정보 혹은 내가 지정해둔 서울특별시 종로구 혜화동의 기상예보가 나오는 모습을 볼 수 있다.
