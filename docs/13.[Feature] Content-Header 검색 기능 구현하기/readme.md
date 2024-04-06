# Content-Header 검색 기능 구현하기

![alt text](image.png)

`Content Header` 영역에 존재하는 `SearchForm` 컴포넌트에서

1. 지역명을 입력하면
2. 지역명에 대한 위경도 데이터를 가져오고
3. 위경도 데이터를 기상청 API 에서 사용하는 `nx , ny` 좌표로 변환

하는 기능을 구현해보려 한다.

### 사용하고자 하는 `API`

주소에 따른 위경도를 구해오는 `API` 는 구글 , 네이버 , 카카오 등 다양한 `API` 를 지원하는데

난 그 중 카카오의 `API` 를 이용하기로 하였다.

Ref : https://developers.kakao.com/

여러가지 명세서를 읽어봤을 때 카카오의 응답 바디가 사용하기 더 깔끔하기도 했고

요청을 보내는 방식이 간단했기 때문에 사용하기로 했다.

> 그리고 결정적으로 네이버나 구글은 `API` 를 이용하기 위한 과정이 비교적 복잡해서 귀찮았다

## 지역명 검색이 가능하도록 컴포넌트에 기능 부착하기

```jsx
import moduleCss from './ContentHeader.module.css';

import SearchForm from '../../../@components/Composite/SearchForm/SearchForm';
import ThemeButton from '../../../@components/UI/ThemeButton/ThemeButton';
import TempButton from '../../../@components/UI/TempButton/TempButton';

import useTheme from '../../../hooks/useTheme';

// TODO 내부에 컴포넌트들 집어넣기
const ContentHeader = () => {
  const { theme } = useTheme();
  return (
    <header style={{ ...theme.Default }} className={moduleCss.contentHeader}>
      <SearchForm>
        <SearchForm.Input /> // 2. Input 에 적혀있는 값으로 요청을 보내야 한다.
        <SearchForm.Button /> // 1. 버튼이 눌리면
      </SearchForm>
      <section style={{ ...theme.Default }} className={moduleCss.buttonWrapper}>
        <TempButton />
        <ThemeButton />
      </section>
    </header>
  );
};

export default ContentHeader;
```

1. `request` 요청에 사용될 지역명의 값은 `SearchForm.Input` 에 적힌 값을 사용하도록 한다.
2. `request` 요청을 보내는 이벤트 핸들러는 `SearchForm.Button` 에 부착하도록 한다.

### 위 로직들을 컴포넌트에 어떻게 전달할까 ?

검색된 값을 이용해 `request` 요청을 보내는 로직을 어느 단에서 정의 할까 생각해봤다.

`SearchForm.Input` 에서 `input` 태그 내에 `ref` 객체를 부착 시킨 후

`SearchForm.Button` 에서 `ref` 객체에 적힌 값을 `ref.current.value` 으로 가져온 후

버튼이 클릭 되면 `ref.current.value` 에 적힌 값으로 `request` 요청을 보내고자 했따.

**하지만 이는 완벽히 실패했고 그 이유는 내가 `useRef` 에 대해 이해하지 못하고 잇었기 때문이였다.**

### 처음에 실패했던 나의 방식

```jsx
const useSearchInputRef = () => {
  const inputRef = useRef(null);
  return inputRef;
};
```

처음에 나는 `inputRef` 를 공유하기 위한 커스텀 훅을 생성하고

```jsx
const Input = ({ placeHolder, className }) => {
  const { theme } = useTheme();
  const inputRef = useSearchInputRef();
  return (
    <input
      style={{ ...theme.Default }}
      type='text'
      ref={inputRef}
      placeholder={placeHolder}
      className={className || moduleCss.input}
    />
  );
};
```

`Input` 컴포넌트 내에서 `inputRef` 를 부착 시키려고 했다.

```jsx
const SearchButton = () => {
  // TODO onClick , item , className 채우기

  const inputRef = useSearchInputRef();
  // 이후 inputRef 를 가지고 리퀘스트 요청을 보내는 과정 ..

  return <Button item='click me !' className={moduleCss.searchButton} />;
};
```

이후 버튼에서 커스텀훅으로 `inputRef` 를 불러와 리퀘스트 요청을 보내려 했다.

이 때 `Input` 에서 불러와진 `inputRef` 는 실제 `input` 태그를 잘 가리키고 있지만

`SearchButton` 에서 불러와진 `inputRef` 는 항상 `null` 객체를 가리키고 있었다.

나는 매우 혼란스러웠다. 분명 인풋에서 나는 `ref` 를 부착시켜줬고 `Input` 컴포넌트 내부에선 잘 부착되어있는데

**왜 다른 컴포넌트에선 부착된 값을 못가져올까 ? 하고 말이다.**

### `useRef` 에서의 `ref` 객체는 선언된 컴포넌트 내부에서만 기억된다.

<!-- TODO -->

... 이건 `useRef` 의 개념에 대해 더 공부하고 나중에 따로 포스팅하자

### `SearchRef Context` 생성하기

```jsx
import { createContext, useRef } from 'react';

const SearchRefContext = createContext(null);

const SearchRefProvider = ({ children }) => {
  const inputRef = useRef(null);

  return (
    <SearchRefContext.Provider value={inputRef}>
      {children}
    </SearchRefContext.Provider>
  );
};

export { SearchRefProvider, SearchRefContext };
```

```jsx
import { useContext } from 'react';
import { SearchRefContext } from '../context/SearchRefProvider';

const useSearchRef = () => {
  const inputRef = useContext(SearchRefContext);
  return inputRef;
};

export default useSearchRef;
```

다음처럼 `SerachRefProvider` 으로 컨텍스트를 생성해주고 컨텍스트에서 전달하는`inputRef` 를 받을 수 있는 `useSearchRef` 커스텀 훅을 생성해주었다.

```jsx
const SearchForm = ({ children }) => {
  return (
    <SearchRefProvider>
      <Form className={moduleCss.searchForm}>{children}</Form>
    </SearchRefProvider>
  );
};
```

이후 `SearchForm` 컴포넌트에서 하위 요소들을 모두 `SearchRefProvider` 컨텍스트로 감싸줌으로서 `SearchForm` 하위 컴포넌트들은 모두 컨텍스트에서 제공하는

`inputRef` 에 접근하고 공유하는 것이 가능하게 만들어주었다.

```jsx
const SearchInput = () => {
  const inputRef = useSearchRef();

  return (
    <Input
      ref={inputRef}
      placeHolder='지역을 입력해주세요'
      className={moduleCss.searchInput}
    />
  );
};
```

`SearchInput` 컴포넌트에선 상위 컨텍스트에서 정의된 `inputRef` 를 받아 `Input` 컴포넌트에 `inputRef` 객체를 `props` 로 전달한다.

이 때 일반적인 컴포넌트에서 `props` 로 `ref` 를 전달하는 것은 불가능하다.

![alt text](image-1.png)

> 이 이유는 추후 따로 포스팅하도록 해야겠다.

그렇기 때문에 `ref` 를 `props` 로 전달 할 수 있도록

```jsx
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { theme } = useTheme();
  const { placeHolder, className } = props;
  return (
    <input
      style={{ ...theme.Default }}
      ref={ref}
      type='text'
      placeholder={placeHolder}
      className={className || moduleCss.input}
    />
  );
});

export default Input;
```

`forwardRef` 으로 기존의 `Input` 컴포넌트를 감싸줘 `ref` 를 `props` 로 받는 것을 가능하게 하였다.

```jsx
const SearchButton = () => {
  // TODO onClick , item , className 채우기
  const inputRef = useSearchRef();

  return (
    <Button
      item='click me !'
      className={moduleCss.searchButton}
      onClick={() => {
        console.log(inputRef.current.value);
      }}
    />
  );
};
```

이후 `SearchButton` 의 `onClick` 메소드로 클릭 시 `SearchForm.Input` 에 적힌 값이 로그되는지 확인해보자

![alt text](image-2.png)

잘 된다 야호

```jsx
// import Components
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

// import moduleCss
import moduleCss from './SearchForm.module.css';

// import customHooks
import useSearchRef from '../../../hooks/useSearchRef';

import { SearchRefProvider } from '../../../context/SearchRefProvider';

const SearchForm = ({ children }) => {
  return (
    <SearchRefProvider>
      <Form className={moduleCss.searchForm}>{children}</Form>
    </SearchRefProvider>
  );
};

const SearchButton = () => {
  // TODO onClick , item , className 채우기
  const inputRef = useSearchRef();

  return (
    <Button
      item='click me !'
      className={moduleCss.searchButton}
      onClick={() => {
        console.log(inputRef.current.value);
      }}
    />
  );
};

const SearchInput = () => {
  const inputRef = useSearchRef();
  // TODO placeHolder , onChange , className 채우기

  return (
    <Input
      ref={inputRef}
      placeHolder='지역을 입력해주세요'
      className={moduleCss.searchInput}
    />
  );
};

SearchForm.Button = SearchButton;
SearchForm.Input = SearchInput;

export default SearchForm;
```

전체 구조는 다음과 같다.

```jsx
const ContentHeader = () => {
  const { theme } = useTheme();
  return (
    <header style={{ ...theme.Default }} className={moduleCss.contentHeader}>
      <SearchForm>
        <SearchForm.Input />
        <SearchForm.Button />
      </SearchForm>
      <section style={{ ...theme.Default }} className={moduleCss.buttonWrapper}>
        <TempButton />
        <ThemeButton />
      </section>
    </header>
  );
};

export default ContentHeader;
```
