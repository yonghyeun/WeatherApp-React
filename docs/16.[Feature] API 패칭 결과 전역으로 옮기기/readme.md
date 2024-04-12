# API 패칭 결과 전역으로 옮겨야 할 필요

```jsx
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
```

이전 `SearchArea` 내부에서 검색어 (`locationString`) 를 이용해

- 지역 문자열 --> 지역 정보가 담긴 객체체 변경하고 (`locationObject`)
- 지역 정보가 담긴 객체 --> 기상청 API 요청 -> 날씨 정보가 담긴 객체 (`forecastWeather`)

로 변경하는 일련의 과정들을 완성했다.

해당 커스텀 훅내부에 정의된 `weather , isLoading , error` 상태 값들을 전역으로 옮길 필요가 있었는데

이는 `ContentHeader / SearchArea` 에서의 상태값은 `ContentMain` 에서도 사용되어야 했기 때문이다.

`weather` 데이터는 카드에서 정보를 담을 떄 필요하고
`isLoading , error` 상태는 카드의 로딩 중 혹은 에러 상태일 때의 카드 양상을 다르게 렌더링 해야 하기 때문이다.

상태 뿐이 아니라 `locationObject` 내부에 존재하는 주소값 또한 `ContentMain / ContentFooter` 로 넘겨 지역 정보를 표현해주어야 했다.

