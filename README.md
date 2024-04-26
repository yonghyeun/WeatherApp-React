![](https://velog.velcdn.com/images/yonghyeun/post/f1c6fb7c-5b2f-463e-8fe6-6eefb0d03e22/image.gif)

> **프로젝트 요약**
>
> - 프로젝트 깃허브 링크 : <a href = 'https://github.com/yonghyeun/WeatherApp-React'>WeatherApp-React</a>
> - 프로젝트 진행 과정 문서 링크 : <a href= https://github.com/yonghyeun/WeatherApp-React/tree/main/docs>WeatherApp-React/docs</a>
> - 프로젝트 기간 : 2024/03/29 ~ 2024/04/26
> - 사용 기술 스택 : `React , react-router-dom, redux`
> - 사용한 API : 기상청 API , 에어코리아 API

---

# 프로젝트 시작 동기

처음으로 비교적 장기간의 토이프로젝트를 혼자 해봤다.

여태 리액트를 공부하며 되게 단순하게 기능들을 공부 할 수 있는

하루 분량 정도의 짧은 토이프로젝트들만 해봤지만

이번에는 여러 가지 기능을 섞은 하나의 프로젝트를 만들어봤다.

해당 프로젝트를 시작하며 꼭 구현해봐야겠다고 생각했던 목표들은 가장 크게 다음과 같았다.

1. 파일들을 모듈식으로 구성하여 파일과 폴더를 잘 구성해보자
2. 전역 상태 관리 라이브러리를 이용하여 상태 관리를 잘 해보자
3. 컴포넌트의 역할과 책임을 적절한 커스텀훅을 이용해 분리를 잘 해보자
4. 합성 컴포넌트 패턴을 활용해서 해보자

이렇게 4가지 , 기능 구현에 초점을 두고 프로젝트를 시작했다.

# 프로젝트를 하며 나는 무엇을 얻었는가

### 문서화의 중요성

나는 사실 블로그 중독자 수준으로 하루 하루 공부한 내용들을 블로그에 매일 포스팅해왔다.

이번 토이프로젝트를 하면서도 블로그에 글을 기술해나갈까 생각했었는데

처음 한, 두개정도를 포스팅하다보니

프로젝트라는 것이 수정없이 쭉 진행되는 것이 아니라 잦은 수정이 일어나기 때문에

만약 수정이 일어나면 매번 포스팅한 글을 수정해야하기 때문에 여간 귀찮은 일이 아니였다.

> 또 너무 많은 글을 포스팅하면 몇 안되는 팔로워들 마저도 질려서 팔로우를 취소 할까 걱정되기도 했다. :)

그래서 이번엔 프로젝트를 진행하며 해야 할 일들은 `Github issue` 를 이용했고

매일매일 진행됐던 부분들은 따로 `docs` 폴더를 만들어 마크다운 형태로 작성했다.

![](https://velog.velcdn.com/images/yonghyeun/post/1a4d0a01-5514-41ec-8bf1-5fc845f28aa8/image.png)

![](https://velog.velcdn.com/images/yonghyeun/post/2a3e523e-6555-4a30-b544-f84e95a8acf5/image.png)

이런식으로 이슈 템플릿을 만들어 해야 할 일들을 정의하고

그 날 시행한 일들을 마크다운 파일로 작성하고 링크로 첨부해뒀다.

![](https://velog.velcdn.com/images/yonghyeun/post/5f458272-c295-45b4-815b-ff9e31b1085d/image.png)

현재까지 `docs` 내부에는 총 28가지의 폴더들이 존재한다. :)

이렇게 해야 할 일들과 한 일들을 문서화 하여 정리해두니 좋았던 점은

1. 문서화 덕후 기질을 만족할 수 있어서 좋았다. 키킥 .. 덕분에 너 동기부여가 됐다.
2. 커밋보다는 비교적 더 큰 범위로 한 일들을 정리 할 수 있고 , 지난 문서 내용들을 통해 과거의 나의 의도라든지, 겪었던 문제들, 해결 방법들을 기억하기 편했다.

### 모듈화 함으로서 각 파일들의 독립성 및 확장성 증가

![](https://velog.velcdn.com/images/yonghyeun/post/87c1282c-42b7-4781-9d83-db643506bc01/image.png)

리액트 폴더의 구조는 다음과 같이 구성해뒀다.

프로젝트 시작 전 `SOLID` 패턴에 대해 공부하고 , 프로젝트 구조에 대한 포스팅을 엄청 보고

거의 이틀동안 프로젝트 폴더 구조에만 고민하다가 , 5분 이상 고민하지말고 일단 하라는 말을 보고

폴더 구조를 그저 단순하게, 내부 파일의 정의에 따라서만 폴더들을 생성해줬다.

이렇게 컴포넌트들은 컴포넌트 별로 , 훅은 훅 별로 , 라우터는 라우터 별로 .. 이런식으로 정리해줬었는데

사실 이 방식은 그닥 좋았던 것 같지 않다.

그 이유는 추후 아쉬웠던 점을 쓸 때 기술하겠지만 가장 큰 이유는

컴포넌트 폴더 내부에서 매우 깊숙한 폴더에 존재하는 파일에서 훅 폴더에 접근하려 하면

`../../../../hooks` 이런 식으로 무수하게 많이 상위 폴더로 들어갔어야 했다.

다만 모듈화를 했다는 것에 의의를 두고 바라보면 다음과 같은 성과를 얻었다.

#### 컴포넌트의 역할 분리

```jsx
import moduleCss from './ContentMain.module.css';
import { Outlet } from 'react-router-dom';

import useFetchingWeatherAir from '../../../hooks/useFetchingWeatherAir';
import useUpdateInitalLocation from '../../../hooks/useUpdateInitalLocation';
const ContentMain = () => {
  useUpdateInitalLocation();
  useFetchingWeatherAir();
  return (
    <main className={moduleCss.contentMain}>
      <Outlet />
    </main>
  );
};
export default ContentMain;
```

뭐 예를 들어 다음과 같이 특정 라우팅 경로에 따라 렌더링 되는 `ContentMain` 컴포넌트가 존재 할 때

`ContentMain` 내부에서 시행될 로직들을 `use ..` 로 시작되는 두 개의 커스텀훅을 통해 추상화 시켜줘

`ContentMain` 의 주역할은 `<Outlet>` 컴포넌트를 렌더링 하는 것임을 명확하게 했다.

#### 함수 , 훅들의 역할 분리

```jsx
import {
  fetchAirData,
  fetchAirTextO3,
  fetchAirTextPM,
  fetchForecastFromLocation,
  fetchForecastText,
  fetchNearstStationName,
} from '../utils/ApiUtils';

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
	...
```

또 로직이 복잡한 커스텀훅을 정의 할 때에는 `utils` 함수 내부에 존재하는 다른 파일들을 불러오거나

다른 또 커스텀훅들을 불러오는 식으로 정의해줬다.

이런 식으로 각 훅이나, 함수들이 한 가지 주제의 일들을 하도록

매우 잘게 잘게 쪼갠 후 조합해서 사용하는 식으로 해줬다.

잘게 잘게 쪼개 생성하니 필연적으로 각 함수들을 서로 독립적으로 유지해줘야 했기 때문에

A 일을 할 때 B 일에서 버그가 생기는 등의 일이 발생하지 않는 점이 좋았다.

각 함수들의 독립성으로 인해 확장이나 수정에 있어서도 자유로웠다.

책에서 읽었던 함수간 의존성이라든지, 확장성이라는 내용들을 체감할 수 있어서 좋았다.

### 전역 상태 관리 라이브러리 `Redux` 를 배웠다

예전에는 전역 상태를 전달해줄 때는 단순하게 `useContext` 써서 보내주는 식으로 이용했다.

`useContext` 를 이용해서 전달하고 , `useContext` 내부의 상태 중 일부를 가져오는 커스텀훅을 만들어서 사용했었다.

사실 `useContext` 만 이용해도 구현에는 문제가 없지만 `Context` 로 상태를 전달 받을 때에는

`Context` 에서 제공하는 `value` 값들 중 일부만 변해도, 해당 `Context` 를 이용하는 모든 컴포넌트에서 리렌더링이 일어난다.

예를 들어 `A context` 값에서 `{state1 , state2 , state 3 , state 4 .. }` 과 같은 값들을 전달할 때

`state1` 을 사용하는 `B` 컴포넌트는 `A context` 의 값 중 일부만 변경되더라도 `state1` 값의 변화와 상관없이 상태값이 변경된 것으로 간주하여 무조건적인 리렌더링이 일어난다.

```jsx
const StateProvider = ({ children }) => {
  // 보일러 플레이트 코드들의 예시
  const [state1, setState1] = useState('Initial state 1');
  const [state2, setState2] = useState('Initial state 2');
  const [state3, setState3] = useState('Initial state 3');
  const [state4, setState4] = useState('Initial state 4');

  return (
    <State1Context.Provider value={{ state1, setState1 }}>
      <State2Context.Provider value={{ state2, setState2 }}>
        <State3Context.Provider value={{ state3, setState3 }}>
          <State4Context.Provider value={{ state4, setState4 }}>
            {children}
          </State4Context.Provider>
        </State3Context.Provider>
      </State2Context.Provider>
    </State1Context.Provider>
  );
};
```

이를 피하기 위해선 한 컨텍스트에서 하나의 상태값만 전달하여야 하며 그렇게 되면 전달할 상태값이 20개면 20개의 컨텍스트로 컴포넌트들을 감싸줘야했다.

> **보일러 플레이트 코드**
> 이러한 코드들을 보일러플레이트 코드라고 한다. 보일러플레이트 코드란 특정 기능을 올바르게 사용하기 위해 필수적인 코드들 말이다.
>
> 컨텍스트를 다른 상태 변화들과 상관 없이 사용하기 위해선 20개의 컨텍스트를 작성해야하는데, 20개의 컨텍스트로 감싸진 컴포넌트는 불필요한 보일러 플레이트 코드가 많은 컴포넌트일 것이다.

#### `Redux` 가 편했던 이유

**다른 전역 상태값이 변하더라도 영향을 받지 않는다.**

```jsx
import { useSelector } from 'react-redux';

const useTimeState = () => {
  return useSelector((state) => state.date);
};

export default useTimeState;
```

하지만 `Redux` 를 이용함으로서 상태 값들을 개별적인 `store` 에 저장해두고 , 콜백 함수를 통해 상태 값을 조회한다.

`state` 를 `Redux Store` 내부에 개별적으로 저장해두고 컴포넌트가 `react logic` 을 따르는 `state` 값을 직접적으로 받아 사용 하는 것이 아니라

`Redux store` 라는 자료구조 내부에서 값을 받아 사용하도록 설계 되어 있다.

상태값 변화는 컴포넌트에 직접적으로 영향을 미치는 것이 아닌 `Redux store` 에 영향을 미치기 때문에

해당 상태 값을 `Redux store` 에서 조회하지 않는 다른 컴포넌트들은 본인이 사용하지 않는 상태 값이 변함에도 불구하고 렌더링이 일어나지 않게 설계되어 있다.

**`Reducer & dispatch` 를 이용한 상태값 변화**

`Redux` 는 상태 변화를 `setState` 와 같이 직접적으로 변화시키는 것이 아닌

변경 상태값과, 상태 변경 타입을 기술하는 액션 타입 객체를 디스패칭 하는 `dispatch` 와

`dispatch` 된 액션 타입의 값을 `store` 내부에 저장시키는 `Reducer` 로직을 이용한다.

이는 리액트의 `useReducer` 의 개념과 거의 동일하다.

`Reducer` 를 이용하여 상태 변화를 일으키게 되면 상태 변화를 추적하는게 쉬워지는데

더 쉽게 만들어주는 것은 `Redux` 내부에 미들웨어를 추가해줄 수 있다는 점이다.

```jsx
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
```

예를 들어 `Redux store` 에 `logger` 라는 미들웨어를 적용시켜주면

`logger` 미들웨어는 디스패칭되는 상태값 변화들을 모두 로그시켜준다.

![](https://velog.velcdn.com/images/yonghyeun/post/b7fbddd5-9337-4f93-8943-686abf68597a/image.png)

지역을 검색하고 , 날씨 정보들을 패칭해오는 과정들을 모두 로그시켜준다.

![](https://velog.velcdn.com/images/yonghyeun/post/9a1871a9-898b-492f-b757-1fe72cfc6806/image.png)

이뿐만 아니라 디스패칭 되는 액션 객체 또한 불러와주기 때문에 상태 변화 중 문제가 발생했을 때 원인을 파악하는게 매우 쉬웠다.

#### `Reducer , dispatch` 로 이뤄져 역할 분리가 훨씬 쉬웠다.

계층적인 구조로 상태를 변화시키는 `Redux` 의 특성상

상태 변화를 캐치하는 `dispatch` 와 상태값에 반영 시키는 `Reducer` , 두 개의 구조로 이뤄진 상태 변화 흐름을 통해

`dispatch` 는 단순하게 상태 변화 값을 디스패칭 하고 ,변화된 상태값을 `Reducer` 에 건내주기만 하면 됐다.

`Reducer` 에선 변화된 상태값을 전처리하여 `store` 에 올리고 ..

```jsx
const dataReducer = (state = inistalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHING_LOCATION:
      const fetchedLocation = payload;
      saveToSessionStorage(fetchedLocation);
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

예를 들어 여러 `API` 의 호출값을 관리하는 `Reducer` 에서는 패칭된 값들을 적절하게 전처리하는 함수들을 불러와 전역 상태값으로 추가한다.

이렇게 계층적인 구조로 나뉘어진 `Redux` 라이브러리를 이용함으로서 전역 상태를 관리하는데 필요한 로직들 또한 계층적인 구조로 나뉜 모듈들로 구성할 수 있어서 좋았다.

### 전역 상태를 `memory` 뿐 아니라 다양한 장소에서 저장 하고 활용할 수 있었다.

`Redux` 를 사용 할 때 `Redux` 에서 사용할 `inital State` 값들을 지정해줘야 한다.

```jsx
const inistalState= { ...}
const dataReducer = (state = inistalState, action) => {
```

이런 `inital State` 값들은 브라우저 메모리에 저장된다.

하지만 메모리에 전역 상태값을 저장하는 것은 몇 가지 문제가 존재했다.

초기 내 프로젝트에서는 특정 지역의 날씨 기상예보를 보기 위해선 무조건적으로 해당 지역명을 검색해줬어야 했다.

지역명을 검색해줘야 메모리 (`Redux store`) 내부에 해당 지역의 날씨 값들이 담기기 때문이다.

만약 지역명을 검색하지 않은 채로 기상예보칸을 클릭하면 런타임 오류가 발생했다.

데이터를 패칭해오기 위한 지역 정보가 메모리에 존재하지 않기 때문이다.

이를 해결하기 위해 사용자가 이전에 검색했던 지역명을 세션 스토리지에 저장해주도록 문제를 해결했었다.

이후 `initalState` 를 만들 때엔 세션 스토리지에서 우선적으로 값을 가져오고 , 만약 값이 존재하지 않는다면 기본값 주소가 설정되도록 해줬다.

그럼 세션 스토리지에만 상태값을 저장하면 끝이였을까 ?

놉

초기 페이지의 경로는 라우팅 될 때

`/menu1` (기상예보가 라우팅 되는 페이지) 해당 경로 하나만 존재했다.

어떤 값을 검색하든 상관없이 모든 경로는 `/menu1` 이였다.

이는 특정 지역의 날씨 정보를 공유하는 것을 불가능하게 했다.

이를 해결하기 위해 지역 정보를 쿼리 파라미터로 추가해줬으며

> `/menu1?lat = .. &lon = ..`

`initalState` 값을 지정할 땐 쿼리파라미터를 우선적으로 사용하도록 해줬다.

이렇게 전역 정보를 메모리 뿐이 아니라 `URI , stroage` 에 효율적으로 담을 수 있게 생각이 확장되었다.

### 합성 컴포넌트 패턴을 사용해봤다.

```jsx
const Card = ({ children, onClick, ...props }) => {
  if (!children)
    throw new Error('카드 컴포넌트는 하위 컴포넌트 없이 사용 될 수 없습니다.');

  const theme = useTheme();
  const className =
    theme === 'dark' ? moduleTheme.cardDark : moduleTheme.cardLight;
  return (
    <section style={{ ...props }} className={className} onClick={onClick}>
      {children}
    </section>
  );
};

Card.LocationTitle = LocationTitle;
Card.DateTitle = DateTitle;
Card.ChangeBar = ChangeBar;
Card.WeatherIcon = WeatherIcon;
```

이는 날씨 정보를 담는 카드 컴포넌트에 합성 컴포넌트 패턴을 이용해 구성해줘봤다.

```jsx
const WeatherMainCard = (props) => {
  const { date, time } = useTimeState();
  return (
    <Card {...props}>
      <FlexColumn flexRatio={[0.5, 0.5]}>
        <FlexRow flexRatio={[0.3, 0.8]}>
          <FlexRow>
            <Card.WeatherIcon date={date} time={time} />
          </FlexRow>
          <FlexColumn justifyContent='space-around'>
            <FlexColumn>
              <Card.LocationTitle />
              <Card.DateTitle />
            </FlexColumn>
            <Card.ChangeBar />
          </FlexColumn>
        </FlexRow>
        <FlexRow justifyContent='space-between'>
          {InfoNames.map((infoName) => (
            <WeatherInfoCard infoName={infoName} key={infoName} />
          ))}
        </FlexRow>
      </FlexColumn>
    </Card>
  );
};
```

이를 활용해서 한 컴포넌트를 합성 컴포넌트 패턴을 이용해 작성해줘봤다.

합성 컴포넌트 패턴을 처음 사용 할 때에는

오~ 되게 효율적이고 좋은데 ~~ 통일감 있는데 ~~

하고 만족했는데 불필요하게 코드 줄수만 늘어나는 것 같아서 개인적으론 별로였다.

굳이 합성 컴포넌트로까지 할 필요가 있나 ? 그냥 합성 컴포넌트로 이용할 컴포넌트들을 같은 폴더와 하위 폴더 구조에 둬서 사용하면 어떨까 싶었다.

그래서 컴포넌트 꼬라지를 보면 알 수 있겠지만 구성은 합성컴포넌트로 구성해줬지만

사용 할 떈 그닥 효율적으로 사용하지 않고 맘대로 사용했다.

---

# 프로젝트를 끝내며 무엇이 아쉽나

### 진짜 못생긴 디자인

우선 가장 아쉬운 점은 못생긴 디자인이다.

![](https://velog.velcdn.com/images/yonghyeun/post/8159ba4b-d1c1-45ca-8bdb-ea061d5a0ec4/image.png)

나의 이 끔찍한 미적감각 ..

처음 프로젝트를 만들 때

기능을 먼저 구현하고 디자인을 나중에 하자 !!

이런식으로 하고 2주간 신~나게 기능을 먼저 구현했다.

2주간은 정말 열심히 했었는데 기능 구현이 끝나갈 때 쯤 디자인을 하려고 하니

너~~!~!~!~!~!~!~!~!무 할 맛이 안나더라

일단 너무 못생겼으니 손도 대기가 싫었다.

지금 결과물은 그나마 나은 것이다. 예전 디자인 손대기 전 모습을 살펴보면 더 끔찍하다

<img src = 'https://github.com/yonghyeun/WeatherApp-React/raw/main/docs/12.%5BFeature%5D%20%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%B3%84%20%EB%93%A4%EC%96%B4%EA%B0%88%20%EC%A3%BC%EC%A0%9C%20%EA%B2%B0%EC%A0%95%ED%95%98%EA%B8%B0/image.png' >

이렇게 구조만 잡아놓고 하려고 하니 너무 못생겨서 할 맛이 안나더라 ..

그래서 디자인 한 2주간 사실 완전히 집중해서 한 날은 5일도 채 안되는 것 같다.

다음번에 할 때는 사용할 컴포넌트 디자인 패턴을 명확하게 하거나 라이브러리를 사용해야겠다.

그리고 더미데이터를 이용해서 디자인 구조를 먼저 해놓고, 기능 구현을 나중에 할까? 싶기도 하다.

다른 사람들은 어떤 식으로 디자인을 하는지 궁금하다.

못생긴 컴포넌트를 만드는 프론트 개발자는 어떤가 하고 스터디에서 고민상담도 했다.

ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

### 순수 집중 시간이 너무 부족했다.

위에서 앞서 말했지만 4주라는 시간 중 2주는 열심히, 2주는 하기 싫다고 투덜거렸던 것 같다.

그 투덜거린 시간은 못생긴 페이지를 보면 할 맛이 뚝뚝 떨어졌던 문제도 있었지만

나머지 2주간은 사실 목표를 잡지도 않았기 때문에 더 진행이 안됐던 것 같다.

확실히 목표를 명확하게 잡고 , 해당 목표를 무조건 이루겠다고 약속하지 않으면 너무 마음이 풀리더라

마음이 풀리니 너무 느리게 진행되어 추가로 진행하려던 부분들을 진행하지 못하고

하나의 기능만 구현하고 마무리했다.

### 타입 스크립트를 배웠더라면 ..

타입스크립트를 배우기 전 토이프로젝트를 해보자 ! 하고 진행한건데

타입스크립트를 배우지 않아서 후회됐던 부분이 몇 가지 존재한다.

하나는 함수의 이름 짓기가 너무 비효율적이였다.

예를 들어 지금은 리팩토링 되어 수정된 부분이지만

```jsx
const locationString = inputRef.current.value;
const locationObject = await fetchLocationFromString(locationString);
const addressName = getAddressName(locationObject);
const forecastWeater = await fetchForecastFromLocation(locationObject);
```

이렇게 인수의 타입 별로 함수의 이름을 짓는것이 너무 못생기고 별로였다.

```jsx
  useEffect(() => {
    // ! TODO useEffect 가 두번씩 호출되는 이유가 뭘까 ?
    // ! 의존성 배열은 잘 들어가있는 것 같은데
	...
  }, [lat, lon]);
};
```

또한 어떤 `useEffect` 에선 동일한 값의 `lat  , lon` 값이 의존성 배열에 존재함에도 불구하고 두 번씩 호출되었다.

이는 `lat , lon` 값이 매번 다른 타입으로 들어왔기 때문이다. 한 번은 문자열, 한번은 정수형

이 부분 때문에 이틀간 문제가 무엇인지 엄청 뜯어봤었는데

만약 타입스크립트를 사용했더라면 컴파일 시 문제점을 캐치 할 수 있었을 것이다.

### 혼자 하다보니 나만의 세상에 빠지게 된다

내가 아무리 효율적인 파일 구조 , 모듈화 등을 아무리 고민하고 해도

이를 평가해줄 사람이 없다보니 내가 잘 하고 있는건지, 혹은 효율적인 코드인지를 리뷰해줄 사람이 없어

나의 진행 정도를 평가하기가 어려웠다.

그래서 더더욱 타입스크립트를 얼른 공부해서 남들과 함께 하는 프로젝트를 해야겠다고 느꼈다.

### 깃허브 배포를 실패했다.

`gh-pages` 라이브러리를 이용해 깃허브 페이지에 배포까진 가능했으나

진짜 어이없게도 깃허브 페이지의 스킴은 `https` , 내가 사용하는 엔드포인트는 `http` 를 이용하기 때문에

깃허브 페이지 배포방법으론 배포하는 것이 불가능했다.

슬퍼 ..

다른 방법들을 도전해볼까도 했지만, 우선 가야 할 길이 멀기 때문에 배포는 나중에 하기로 했다.

---

# 전체 회고

그래도 나름 유의미한 시간이였다.

여태 배웠던 내용들을 모두 써보기도 했고 새로운 기술들도 써봤기 때문이다.

하지만 너무 못생긴 디자인 감각 , 팀프로젝트 경험이 부족한 것은 나중에 채워가야 할 것이다.

한달간 180번의 커밋이 일어났는데 이 중 140번의 커밋은 뻘짓, 40번의 커밋만이 유의미한 진전이였다.

점점 더 배워나가서 이런 뻘짓 시간을 줄여가야겠다.
