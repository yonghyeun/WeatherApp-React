# 카드 컴포넌트 생성하기

지난 2주간 필요한 데이터를 패칭해오고 전역 상태도 생성했기 때문에

이제 전역 상태에 있는 값들을 이용해 렌더링 할 수 있는 카드 컴포넌트들을 생성해보자

# 문제점 확인하기 : `Wrapper` 컴포넌트의 작동 방식이 너무 구려요

![alt text](image.png)

현재 카드 컴포넌트 양식들을 만들다가 가장 느낀 문제점은

이전에 만들었던 `Wrapper` 컴포넌트가 작동하지 않는다는 점이다.

```jsx
// import util function
import { makeFlexchildren } from '../../../utils/WrapperUtils.js';
// import style
import moduleCss from './Wrapper.module.css';
const Horizontal = ({ ratio, children, style, height, className }) => {
  const flexChildren = makeFlexchildren(ratio, children);
  return (
    <section
      style={{
        flexDirection: 'row',
        height: height,
        ...style,
      }}
      className={className || moduleCss.Wrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Horizontal;
```

이처럼 `ratio` 를 `props` 로 받아 하위 컴포넌트들에게 `flex-grow` 를 정해주었지만

`flex-grow` 속성은 해당 컴포넌트가 비어있을 때에만 유효하지

컴포넌트 내부에 다른 태그들이 존재 할 때에는 작동하지 않는다.

우선 가장 큰 이유는 `Wrapper` 컴포넌트 내부에서 호출되는 `makeFlexChildren` 메소드는

`children` 으로 들어오는 엘리먼트가 `HTMLElement` 일 것이라 생각하고 직접적으로 `style props` 에 접근하여 `flex-grow` 를 주입하는데

개발이 되갈수록 카드 컴포넌트들은 `JSX` 객체 형태로 `Wrapper` 의 하위 컴포넌트로 들어가게 된다.

이에 `flex-grow` 주입이 원활하게 일어나지 않는다.

또, 시간이 지나 생각해보니 `Wrapper` 컴포넌트의 동작이 너무 무겁기도 하고 사용법이 너무 어렵다.

내가 만들었음에도 불구하고 말이다.

이에 카드 컴포넌트들을 감싸주는 `Wrapper` 컴포넌트들을 다시 생성해주도록 해야겠다.

처음에 생각했던 카드 컴포넌트들의 크기를 `Wrapper` 컴포넌트에서 결정해주기로 했던 내 이론은

폐기하기로 했다.

어떤 컴포넌트의 특징을 상위 컴포넌트에서 결정해주는 것은 각 컴포넌트 간의 의존성을 높히기 때문이였다.

이렇게 높아진 의존성 문제로 인해 카드 컴포넌트를 내 마음대로 수정하는 것이 어려웠다.

![alt text](image-1.png)

이미 열흘 전에 문제점을 내가 파악했었다.

# 어떻게 해결할까 ? : 새로운 컴포넌트를 생성하자

우선 기존의 `menuPage` 의 더러운 코드를 모두 비워주도록 하자

![alt text](image-2.png)

깔~끔

### `FlexRow,  FlexColumn` 컴포넌트 생성

```jsx
import moduleStyle from './Flex.module.css';

const FlexColumn = ({ children, width }) => {
  return (
    <section style={{ width }} className={moduleStyle.flexColumn}>
      {children}
    </section>
  );
};

const FlexRow = ({ children, width }) => {
  return (
    <section style={{ width }} className={moduleStyle.flexRow}>
      {children}
    </section>
  );
};

export { FlexColumn, FlexRow };
```

```css
.flexRow {
  display: flex;
  flex-direction: row;
}

.flexColumn {
  display: flex;
  flex-direction: column;
}
```

다음처럼 단순하게 `section` 태그에 `flex-direction` 을 다르게 한 `flex-box` 를 생성해준다.

# `Typography` 컴포넌트 생성

이후 카드 컴포넌트에서 문장들을 넣기 위해 `Typohgrapy` 컴포넌트를 생성해준다.

```jsx
import React from 'react';
import moduleStyle from './Typography.module.css'; // Ensure the path is correct

const Typography = ({ children }) => {
  if (!children) {
    throw new Error('Typography 컴포넌트는 혼자 사용될 수 없습니다.');
  }
  return <span>{children}</span>;
};

Typography.MainTitle = ({ children }) => {
  return <h1 className={moduleStyle.mainTitle}>{children}</h1>;
};

Typography.SubTitle = ({ children }) => {
  return <h2 className={moduleStyle.subTitle}>{children}</h2>;
};

Typography.MainText = ({ children }) => {
  return <p className={moduleStyle.mainText}>{children}</p>;
};

Typography.SubText = ({ children }) => {
  return <p className={moduleStyle.subText}>{children}</p>;
};

Typography.Label = ({ children }) => {
  return <p className={moduleStyle.label}>{children}</p>;
};

export default Typography;
```

합성 컴포넌트 형태로 생성해주었다.

`props` 로 넘겨줄까도 생각해봤는데 우선 이번 컨셉이 합성 컴포넌트를 잘 사용하는거였으니까

합성 컴포넌트 사용해보도록 하자

> 다만 나는 쓰면서 좋은점보다 불편한점이 더 느껴진다.
