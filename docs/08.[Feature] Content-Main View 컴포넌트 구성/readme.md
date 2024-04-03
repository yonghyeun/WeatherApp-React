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

# `CardWrapper` 합성 컴포넌트 구성하기

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

```jsx
// import util function
import { makeFlexchildren } from '../../../utils/CardWrapperUtils.js';
// import style
import style from './CardWrapper.module.css';

const Horizontal = ({ ratio, children }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section style={{ flexDirection: 'row' }} className={style.cardWrapper}>
      {flexChildren}
    </section>
  );
};

export default Horizontal;
```

```jsx
// import util function
import { makeFlexchildren } from '../../../utils/CardWrapperUtils.js';
// import style
import style from './CardWrapper.module.css';

const Vertical = ({ ratio, children }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section style={{ flexDirection: 'column' }} className={style.cardWrapper}>
      {flexChildren}
    </section>
  );
};

export default Vertical;
```

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

  const flexchildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        flexGrow: ratio ? ratio[index] : 1,
      },
    });
  });

  return flexchildren;
};

export { makeFlexchildren };
```

최대한 컴포넌트 들이 본인의 관심사의 일만 처리 할 수 있도록 모듈화 시켜주었다.

`makeFlexchildren` 메소드는 `ratio ,  children` 이 적절하게 배정되었는지 , 적절하게 배정되었다면 `style` 에 `flex-grow` 속성이 설정 된 `React.Element` 를 반환한다.

---

### `[BUG]` `CardWrapper` 가 내부에서 중첩되어 사용될 때 `flexGrow` 가 적용되지 않음

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

#### 문제 진단

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

  const flexchildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        flexGrow: ratio ? ratio[index] : 1,
      },
    });
  });

  return flexchildren;
};

export { makeFlexchildren };
```

문제는 여기였다. `flexchildren` 을 만드는 과정에서 `ratio` 의 값이 `React.Element` 의 `style` 에 값이 들어가고 있었다.

이에 기본적인 `HTML element` 의 경우엔 `style` 에 값이 들어가고 있지만

```jsx
// import util function
import { makeFlexchildren } from '../../../utils/CardWrapperUtils.js';
// import style
import style from './CardWrapper.module.css';

// flexChildren 으로 props 가 설정된 CardWrapper.Vertical 컴포넌트의 props 인
// props.style 은 렌더링 시 아무곳에도 적용되지 아니함
const Vertical = ({ ratio, children }) => {
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section style={{ flexDirection: 'column' }} className={style.cardWrapper}>
      {flexChildren}
    </section>
  );
};

export default Vertical;
```

`child` 가 `CardWrapper` 와 같은 리액트 컴포넌트 일 때는 `props.style` 에 지정한 값이

렌더링 시 영향을 미치고 있지 않는다는 점이였다.

`makeFlexChildren` 메소드에서 `props` 에 `ratio` 값을 `drilling` 해서 새로운 컴포넌트를 만들어줄 때

새로 생성된 `props.style` 이 렌더링 시 적용되도록 컴포넌트를 수정해보자

#### 문제 해결

```jsx
// import util function
import { makeFlexchildren } from '../../../utils/CardWrapperUtils.js';
// import style
import module from './CardWrapper.module.css'; // 중복되지 않게 이름을 변경

const Vertical = ({ ratio, children, style }) => {
  // props 로 style 을 받아준다.
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{ flexDirection: 'column', ...style }} // 받은 style 을 인라인 스타일로 덮어씌워줌
      className={module.cardWrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Vertical;
```

`props` 로 `style` 을 받을 수 있게 하고 `props.style` 로 받은 값을 반환되는 `section` 의 `style` 로 덮어씌우도록 하였다.

이를 통해 `flexChildren` 으로 생성되는 `CardWrapper` 들은 상위 `CardWrapper` 에서 선언된 `ratio` 만큼의 크기를 가질 수 있게 되었다.

### `[BUG]` `flexGrow` 는 적용되지만 실제 크기가 변경되지 아니함

#### 문제 정의

```jsx
<CardWrapper.Horizontal ratio={[0.1, 0.2, 0.7]}>
  <CardWrapper.Vertical ratio={[0.2, 0.8]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Vertical ratio={[0.4, 0.6]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Vertical ratio={[0.8, 0.2]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
</CardWrapper.Horizontal>
```

다음과 같이 `CardWrapper` 내에서 `CardWrapper` 들을 중첩적으로 사용해봤다. 이 때 중첩된 하위 랩퍼들은 모두 `0.1, 0.2, 0.7` 의 `width` 비율을 가지고 렌더링이 될 것이라 생각했다.

![alt text](image-4.png)

하지만 하위 `CardWrapper` 들의 `flexGrow` 속성이 적용되지 않고 모두 동일한 비율로 렌더링 되고 있었다.

사실 문제는 이 뿐만이 아니였다.

![alt text](image-5.png)

기본적으로 `CardWrapper` 들의 `height` 를 30%로 명시해뒀더니 중첩되어 사용되는 카드 랩퍼의 `heigth` 는 부모 `CardWrapper` 의 30%의 높이를 갖기 때문에 기대하는 것과 다르게 매우 작은 컴포넌트가 생성되었다.

- 문제 1. `flexGrow` 가 설정되어도 컴포넌트들의 `width` 가 변경되지 아니함
- 문제 2. `height` 속성 간 중첩으로 인해 내부 컴포넌트의 크기가 기대와 다르게 작아짐 . (30%의 30% .. 이런식)

#### 문제 진단

> 문제 1. `flexGrow` 가 설정되어도 컴포넌트들의 `width` 가 변경되지 아니함

해당 문제는 `flexGrow` 속성은 컴포넌트의 `width , height` 와 같은 크기 관련 속성이 명시되지 않았을 경우 작동한다.

이에 `CardWrapper.Horizontal` 에서 중첩되어 사용되는 내부 컴포넌트들의 크기를 `width : 100%` 로 고정시켜뒀던 스타일 속성을 제거해주었다.

```css
/* TODO Padding , gap 결정하기 */
.cardWrapper {
  /* width: 100%;   삭제 */
  height: 30%;
  display: flex;
  gap: 1%;
}
```

![alt text](image-6.png)

이를 통해 `CardWrapper.Horizontal` 에서 `flexGrow` 속성이 `width` 속성으로 인해 가려지던 문제를 해결하였다.

> 문제 2. `height` 속성 간 중첩으로 인해 내부 컴포넌트의 크기가 기대와 다르게 작아짐 . (30%의 30% .. 이런식)

해당 문제는 모든 `CardWrapper.Horizontal , Vertical` 에서 동일한 `height` 스타일 속성이 적용됨에 따라

`height` 가 30% 로 정의되어 있을 때

전체 크기의 30% 인 부모 랩퍼 컴포넌트와 , 부모 랩퍼 컴포넌트의 30%인 자식 램퍼 컴포넌트가 존재함에 따라

자식 랩퍼 컴포넌트 내부의 크기가 매우 작아지는 문제였다.

문제의 원인을 제거해보자

```css
/* TODO Padding , gap 결정하기 */
.cardWrapper {
  /* height: 30%; 삭제 */
  display: flex;
  gap: 1%;
}
```

부모 랩퍼 컴포넌트나 자식 랩퍼 컴포넌트에게 모두 동일하게 전달되던 `height` 속성을 제거해주었다.

```jsx
// import util function
import { makeFlexchildren } from '../../../utils/CardWrapperUtils.js';
// import style
import module from './CardWrapper.module.css';

const Horizontal = ({ ratio, children, style, height }) => {
  // height props 추가
  const flexChildren = makeFlexchildren(ratio, children);

  return (
    <section
      style={{ flexDirection: 'row', height: height, ...style }} // height 적용
      className={module.cardWrapper}
    >
      {flexChildren}
    </section>
  );
};

export default Horizontal;
```

이후 부모 랩퍼 컴포넌트로 사용 가능한 `CardWrapper.Horizontal` 컴포넌트에서 `height props` 를 추가해줌으로서

부모 랩퍼 컴포넌트의 높이를 명시적으로 지정해주도록 하였다.

#### 문제 해결 결과

```jsx
<CardWrapper.Horizontal ratio={[0.1, 0.2, 0.7]} height='30%'>
  // 부모 랩퍼 컴포넌트의 크기를 명시적으로 지정
  <CardWrapper.Vertical ratio={[0.2, 0.8]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Vertical ratio={[0.4, 0.6]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Vertical ratio={[0.8, 0.2]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
</CardWrapper.Horizontal>
```

![alt text](image-7.png)

잘 작동한다.

자식 랩퍼 컴포넌트에 `Vertical , Horizontal` 이 모두 섞여 사용될 때에는 ?

```jsx
<CardWrapper.Horizontal ratio={[0.1, 0.2, 0.7]} height='30%'>
  <CardWrapper.Vertical ratio={[0.2, 0.8]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Horizontal ratio={[0.4, 0.6]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Horizontal>
  <CardWrapper.Vertical ratio={[0.8, 0.2]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
</CardWrapper.Horizontal>
```

![alt text](image-8.png)

잘 작동한다.

그럼 마지막으로 `Vertical , Horizontal , Element` 가 섞여 사용될 때를 살펴보자

```jsx
<CardWrapper.Horizontal ratio={[0.1, 0.2, 0.7]} height='30%'>
  <CardWrapper.Vertical ratio={[0.2, 0.8]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Vertical>
  <CardWrapper.Horizontal ratio={[0.4, 0.6]}>
    <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
    <div style={{ backgroundColor: 'green', display: 'flex' }}></div>
  </CardWrapper.Horizontal>
  <div style={{ backgroundColor: 'red', display: 'flex' }}></div>
</CardWrapper.Horizontal>
```

![alt text](image-9.png)

구우우우웃 ~~!!
