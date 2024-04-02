# `Content Main` 컴포넌트 구성하기

`Content Main` 은 받아온 `API` 데이터들을 가지고 `Card` 컴포넌트들을 렌더링 하는 부분이다.

`Card` 컴포넌트들을 적절히 보내기 위해서 각 `Card` 컴포넌트들을 감쌀 적절한 `CardWrapper` 컴포넌트가 필요하다.

## `CardWrapper` 컴포넌트

![alt text](image.png)

이전 랩퍼 컴포넌트를 구상 할 때 카드들을 단순한 구조로 나열하기 보다

다양한 구조로 나열하고 싶다고 했었다 .

위와 같은 구조로 나열하기 위해 필요한 컴포넌트들을 생각해보자

우선 `CardWrapper` 는 `section` 컴포넌트로 구성되어 있고

`Vertical , Horizontal` 의 프로퍼티들을 갖고 있어야 할 것이다.

이는 `css` 속성인 `flex-direction : ..` 에 따라 구분될 것이다.

강 `CardWrapper` 는 `props` 로 `ratio` 를 받도록 하자.

그를 통해 `CardWrapper` 내부의 `Card` 컴포넌트들의 크기를 동적으로 조절 해주도록 하자.

`ratio` 는 `flex-grow` 와 관련있다.

- 이를 통해 얻을 수 있는 이점
  `Wrapper` 에서 내부 아이템들의 크기를 지정해줌으로서 내부 아이템들을 생성 할 때 내부 아이템의 크기 별 컴포넌트 등을 신경 쓰지 않아도 될 것이다.

---

### `[BUG]` `CardWrapper` 가 기대하는 것처럼 작동하지 않는다.

#### 백그라운드

```jsx
import Horizontal from './Horizontal';
import Vertical from './Vertical';

const CardWrapper = () => {
  throw new Error('CardWrapper 는 Vertical , Horizontal 중에서 골라야 합니다.');
};

CardWrapper.Horizontal = Horizontal;
CardWrapper.Vertical = Vertical;

export default CardWrapper;
```

다음과 같이 구성되어 있을 때

```jsx
<CardWrapper.Horizontal>
  <div style={{ backgroundColor: 'black' }}></div>
  <div style={{ backgroundColor: 'black' }}></div>
  <div style={{ backgroundColor: 'black' }}></div>
</CardWrapper.Horizontal>
```

처럼 카드들을 감싸주는 랩퍼를 만들어줬다.

`ratio props` 를 지정해주면 내부에 존재하는 카드들의 크기를 `flex-grow` 속성을 통해 지정해주도록 하였다.

```jsx
import React from 'react';

/**
 * 만일 ratio 에 적힌 원소의 수와 children 의 수가 맞지 않는다면 오류를 발생시키고
 * ratio 를 적지 않은 경우엔 children 의 flex-grow 를 모두 1로 설정해주도록 함
 * @param {Array<number>} ratio - ReactElement 들의 flexGrow 를 담은 배열
 * @param {Array<React.ReactNode>} children - flexGrow 가 설정될 children elements
 * @returns {Array<React.ReactElement>} - flexGrow 가 설정된 ReactElement를 담은 배열
 */
const makeFlexchildren = (ratio, children) => {
  if (ratio && ratio.length !== children.length)
    throw new Error('ratio의 개수와 children 의 개수는 동일해야 합니다');

  if (ratio && ratio.reduce((pre, cur) => pre + cur) !== 1)
    throw new Error('ratio 의 합은 1이여야 합니다');

  const flexChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        flexGrow: ratio ? ratio[index] : 1,
      },
    });
  });

  return flexChildren;
};

export { makeFlexchildren };
```

#### 문제정의

```jsx
<CardWrapper.Horizontal ratio={[0.3, 0.3, 0.4]}>
  <div style={{ backgroundColor: 'black' }}></div>
  <div style={{ backgroundColor: 'black' }}></div>
  <div style={{ backgroundColor: 'black' }}></div>
</CardWrapper.Horizontal>
```

실험삼아 사용해본 `Horizontal` 에서는 잘 작동한다.

![alt text](image-1.png)

```jsx
<CardWrapper.Horizontal ratio={[0.3, 0.3, 0.4]}>
  <div style={{ backgroundColor: 'black' }}></div>
  <CardWrapper.Vertical>
    <div style={{ backgroundColor: 'black' }}></div>
    <div style={{ backgroundColor: 'black' }}></div>
  </CardWrapper.Vertical>
  <div style={{ backgroundColor: 'black' }}></div>
</CardWrapper.Horizontal>
```

다만 이처럼 카드 랩퍼 내에서 카드 랩퍼를 중첩하여 사용 할 경우

![alt text](image-2.png)

`ratio props` 에 설정한 만큼 되는 것이 아니라 중첩되어 사용된 `CardWrapper` 의 너비가 `HTML element` 를 덮어 씌우고 있는 모습을 볼 수 있다.

이는 비단 컴포넌트와 HTMl 엘리먼트여서 발생하는 문제가 아니다.

```jsx
<CardWrapper.Horizontal ratio={[0.1, 0.2, 0.7]}>
  <CardWrapper.Vertical>
    <div style={{ backgroundColor: 'red' }}></div>
    <div style={{ backgroundColor: 'green' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Vertical>
    <div style={{ backgroundColor: 'red' }}></div>
    <div style={{ backgroundColor: 'green' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Vertical>
    <div style={{ backgroundColor: 'red' }}></div>
    <div style={{ backgroundColor: 'green' }}></div>
  </CardWrapper.Vertical>
</CardWrapper.Horizontal>
```

![alt text](image-3.png)
다음처럼 내부에서 랩퍼 컴포넌트 들의 `ratio` 가 인식되지 않고 중첩된 `CardWrapper...` 들의 속성인 `width 100%` 속성과 컨테이너 역할을 할 `CardWrapper` 의 플렉스 박스 + gap 에 의해 너비가 동일하게 나뉘는 모습을 볼 수 있다.
