# `react-router-dom` 으로 레이어 구성하기

![alt text](image.png)

현재 만들고자 하는 프로젝트의 라우터 계층은 단순하기 때문에 금방 구성해주도록 하자

- `/` : 가장 기본이 되는 라우터 계층
- `/:menu` : 사이드바의 메뉴에 따라 라우팅 되는 계층
- `/:menu?location= ...` : 검색한 지역에 따라 변경되는 파라미터

고민중인거는 파라미터를 한국말로 하게 되면 `URL` 상에서 인코딩되어 매우 뚱둥하고 못생긴 `url` 이 되어버린다.

그래서 내 생각에는, 기상청 `API` 를 이용하기 위해서는 어차피 `nx,ny` 좌표로 요청을 보내야 하기 때문에

요청을 위해 지역명이 변환된 `nx, ny` 좌표값을 이용해 쿼리 파라미터로 사용할까 생각중이다.

그건 나중에 기능 구현 할 때 추가해주도록 하고

리액트 라우터로 계층을 구현해주자.

# `react-router-dom` 계층 구성

## `ErrorPage`

`react-router-dom` 을 이용하기 위해선 필수적으로 `errorElement` 를 지정해줘야 한다.

이전 `react-router-dom` 을 보면서 에러 페이지를 구현해봤던 경험이 있으니 뚝딱 만들어보자

```jsx
import { useRouteError } from 'react-router-dom';

import style from './ErrorPage.module.css';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={style.errorPage}>
      <h1>Oops!</h1>
      <p>
        <i>errorStatus : {error.status}</i>
        <br />
        <i>{error.data}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
```

```css
.errorPage {
  width: 100%;
  height: 100%;
  padding: 20%;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  align-items: center;
}

.errorPage h1 {
  font-size: 5rem;
}

.errorPage p {
  text-align: center;
  font-size: 2.5rem;
  display: block;
  color: #aaa;
}
```

이후 만들어둔 `errorPage` 를 이용하여 계층만 빠르게 만들어보자

```jsx
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import App from '../App.js'; // 엔트리 파일

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
]);

export default router;
```

![alt text](image-1.png)

아직 `/` 이후 라우팅 되는 주소에 대한 페이지를 만들어두지 않았으니 라우팅 되면 에러 페이지가 나타난다.

다만 엔트리파일을 조금 지워보자
